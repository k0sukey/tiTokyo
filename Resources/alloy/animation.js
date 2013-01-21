exports.crossFade = function(from, to, duration, finishCallback) {
    from && from.animate({
        opacity: 0,
        duration: duration
    });
    to && to.animate({
        opacity: 1,
        duration: duration
    });
    finishCallback && setTimeout(finishCallback, duration + 300);
};

exports.fadeAndRemove = function(from, duration, container, finishCallback) {
    from && container && from.animate({
        opacity: 0,
        duration: duration
    }, function() {
        container.remove(from);
        container = from = duration = null;
        finishCallback && finishCallback();
    });
};

exports.fadeIn = function(to, duration, finishCallback) {
    to && to.animate({
        opacity: 1,
        duration: duration
    }, function() {
        finishCallback && finishCallback();
    });
};

exports.fadeOut = function(to, duration, finishCallback) {
    to && to.animate({
        opacity: 0,
        duration: duration
    }, function() {
        finishCallback && finishCallback();
    });
};

exports.popIn = function(view, finishCallback) {
    view.transform = Ti.UI.create2DMatrix();
    view.opacity = 1;
    return;
};

exports.shake = function(view, delay, finishCallback) {
    var shake1 = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().translate(5, 0),
        duration: 100
    }), shake2 = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().translate(-5, 0),
        duration: 100
    }), shake3 = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().translate(5, 0),
        duration: 100
    }), shake4 = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix().translate(-5, 0),
        duration: 100
    }), shake5 = Ti.UI.createAnimation({
        transform: Ti.UI.create2DMatrix(),
        duration: 100
    });
    delay ? setTimeout(function() {
        exports.chainAnimate(view, [ shake1, shake2, shake3, shake4, shake5 ], finishCallback);
        view = shake1 = shake2 = shake3 = shake4 = shake5 = null;
    }, delay) : exports.chainAnimate(view, [ shake1, shake2, shake3, shake4, shake5 ], finishCallback);
};

exports.flash = function(view, delay, finishCallback) {
    var flash1 = Ti.UI.createAnimation({
        opacity: 0.7,
        duration: 100
    }), flash2 = Ti.UI.createAnimation({
        opacity: 1,
        duration: 100
    }), flash3 = Ti.UI.createAnimation({
        opacity: 0.7,
        duration: 100
    }), flash4 = Ti.UI.createAnimation({
        opacity: 1,
        duration: 100
    });
    delay ? setTimeout(function() {
        exports.chainAnimate(view, [ flash1, flash2, flash3, flash4 ], finishCallback);
        view = flash1 = flash2 = flash3 = flash4 = null;
    }, delay) : exports.chainAnimate(view, [ flash1, flash2, flash3, flash4 ], finishCallback);
};

exports.chainAnimate = function(view, animations, finishCallback) {
    function step() {
        if (animations.length == 0) {
            view = animations = null;
            finishCallback && finishCallback();
            return;
        }
        var animation = animations.shift();
        animation.addEventListener("complete", step);
        view.animate(animation);
    }
    step();
};