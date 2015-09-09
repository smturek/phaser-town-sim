var HTown = HTown || {};

//calculate the dimensions of the game so that 100% of the screen is used

HTown.getGameLandscapeDimensions = function (max_w, max_h) {
    //get both w and h of the screen
    var w = window.innerWidth * window.devicePixelRatio;
    var h = window.innerHeight * window.devicePixelRatio;

    //determin which is w and which is h
    var landW = Math.max(w, h);
    var landH = Math.min(w, h);

    //figure out if we need scaling for width
    if(landW > max_w) {
        var ratioW = max_w / landW;
        landW *= ratioW;
        landH *= ratioW;
    }

    //figure out if we need scaling for height
    if(landH > max_h) {
        var ratioH = max_h / landH;
        landW *= ratioH;
        landH *= ratioH;
    }

    return {
        w: landW,
        h: landH
    };
};
