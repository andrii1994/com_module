if (typeof jQuery === 'undefined') {
    throw new Error('Com Module requires jQuery')
} else {
    $j_com = jQuery;
}

var COM = COM || {};

// override standard magento validation
// to have validated not showing fields
Object.extend(Validation, {
    isVisible : function(elm) {
        return true;
    }
});

COM.Module = {
    tabs: function() {
        $j_com('#com-tabs').tabs({
            active: 0
        });
    },
    goToNextTab: function() {
        $j_com('.go-next').on('click', function() {
            var active = $j_com('#com-tabs').tabs('option', 'active');
            $j_com('#com-tabs').tabs('option', 'active', active+1);
        });

    },
    tooltip: function() {
        $j_com( ".com-tooltip" ).tooltip({
            items: 'div',
            content: function () {
                return $j_com(this).attr("data-tooltip");
            },
            position: {
                my: "left+15 center",
                at: "right center"
            }
        });
    },
    checkForFailedValidation: function() {
        $j_com('.add-to-cart .btn-cart').on('click', function() {
            $j_com('.com-tab a').each(function() {
                var contentId = $j_com(this).attr('href');
                if ($j_com(contentId).find('.validation-failed').length != 0) {
                    COM.Module.addErrClass(contentId);
                } else {
                    COM.Module.removeErrClass(contentId);
                }
            });
            COM.Module.goToFirstNotValidTab();
        });
    },
    addErrClass: function(href) {
        var tab = '#com-tabs a[href="'+href+'"]';
        $j_com(tab).parent().addClass('validation-err');
    },
    removeErrClass: function(href) {
        var tab = '#com-tabs a[href="'+href+'"]';
        $j_com(tab).parent().removeClass('validation-err');
    },
    goToFirstNotValidTab: function() {
        var index = $j_com('.validation-err').first().index();
        $j_com('#com-tabs').tabs('option', 'active', index);
    }
};

$j_com(document).ready(function() {
    COM.Module.goToNextTab();
    COM.Module.tooltip();
    COM.Module.checkForFailedValidation();
});
