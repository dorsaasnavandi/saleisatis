window.onscroll = function () {
    if (window.pageYOffset > 250) {
        document.getElementsByClassName("nav-sticky").item(0).classList.add('nav-sticky-active');
    }
    else {
        document.getElementsByClassName("nav-sticky").item(0).classList.remove('nav-sticky-active');
    }
};
document.getElementById('menu-click').onclick = function () {
    clickMenu('menu');
};

document.getElementById('menu-sticky-click').onclick = function () {
    clickMenu('menu');
};
document.getElementById('sign-click').onclick = function () {
    clickMenu('sign');
};
document.getElementById('sign-sticky-click').onclick = function () {
    clickMenu('sign');
};

document.getElementsByClassName('closeMenu').item(0).onclick = function () {
    deleteMenu('menu');
};
document.getElementsByClassName('closeMenu').item(1).onclick = function () {
    deleteMenu('sign');
};
document.getElementsByClassName('space-menu').item(0).onclick = function () {
    deleteMenu('menu');
};
document.getElementsByClassName('space-menu').item(1).onclick = function () {
    deleteMenu('sign');
};
document.getElementById('filter-sticky-click').onclick = function () {
    goToFilter();
};
document.getElementById('filter-click').onclick = function () {
    goToFilter();
};

function clickMenu(idClick) {
    document.getElementById(idClick).classList.add('menu-activaton');
    $('.side-menu').animate({right: '0px'}, 500);
}

function deleteMenu(idDel) {
    $('.side-menu').animate({right: '-300px'}, 500, function () {
        document.getElementById(idDel).classList.remove('menu-activaton');
    });
}

spaceTopFilter = document.getElementById('filter').offsetTop;

function goToFilter() {
    $("body,html").animate({scrollTop: spaceTopFilter}, 500);
}

dropdownSelectCounter = 0;
$(".selected").click(function () {
    if (dropdownSelectCounter % 2 == 0) {
        $(this).next().slideDown(300);
    } else {
        $(this).next().slideUp(300);
    }
    dropdownSelectCounter++;
});
$(".option-div").click(function () {
    choose = $(this).text();
    choose = "<i class=\"fa fa-angle-down\"></i>" + choose;
    $(this).parent().prev().html(choose);
    $(this).parent().slideUp(300);
});
moreDisplayCounter = 0;
$(".more-search").click(function () {
    if (moreDisplayCounter % 2 == 0) {
        $(".more-info-search").slideDown(300);
        $(this).html("<i class='fa fa-minus'></i><span>گزینه های کمتر</span>");
    } else {
        $(".more-info-search").slideUp(300);
        $(this).html("<i class='fa fa-plus'></i><span>گزینه های بیشتر</span>");
    }
    moreDisplayCounter++;
});

imgCounter = 1;

function slider() {
    setIntervalVar = setInterval(function () {
        imgCounter++;
        if (imgCounter > 5) {
            imgCounter = 1;
        }
        $(".slider-image").addClass("effect-slider");
        $(".slider-image").removeClass("transform-slider");
        setTimeout(function () {
            document.getElementsByClassName("slider-image").item(0).setAttribute('src', 'img/' + imgCounter + '.jpg');
        },200);
        setTimeout(function () {
            $(".slider-image").removeClass("effect-slider");
            $(".slider-image").addClass("transform-slider");
        }, 200);
    }, 5600);
    $(".slider-image").addClass("transform-slider");
}

slider();