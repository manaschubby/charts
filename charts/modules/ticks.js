const d3 = require("d3");
const CONSTANTS = require("../constants");
const { getDistanceBetweenElements } = require("../utils");

const isTickTextOverflowing = () => {
    /*
        Here we check if the tick text is overflowing the rotating margin.
        - tick length should not exceed xAxiis length
    */
    const tickText = d3.selectAll(".x-axis .tick text");
    const tickNodes = tickText.nodes();
    const xScale = window.grafieks.utils.xScale;
    let isOverflowing = false;
    const tickNodeLength = tickNodes.length;
    let rotatingMargin = grafieks.chartsConfig.margins.rotatingMargin;
    const barsWidth = xScale.bandwidth();

    for (var i = 0; i < tickNodeLength; i++) {
        const tick = tickNodes[i];
        const textLength = tick.getComputedTextLength();
        if (rotatingMargin < textLength) {
            rotatingMargin = Math.min(textLength, CONSTANTS.defaultValues.maxRotationMargin);
        }
        if (isOverflowing) {
            continue;
        }
        if (textLength > barsWidth) {
            isOverflowing = true;
        }
    }
    if (isOverflowing) {
        grafieks.chartsConfig.margins.rotatingMargin = rotatingMargin - 5;
    }
    return isOverflowing;
};

const getClippedTickText = (tick, tickNodeLength) => {
    const text = tick.innerHTML;
    const singleLetterLength = tickNodeLength / text.length;
    const totalEligibleCharacters = Math.floor(grafieks.chartsConfig.margins.rotatingMargin / singleLetterLength);
    if (text.length - totalEligibleCharacters > 3) {
        return text.substr(0, totalEligibleCharacters + 2) + "...";
    }
    return text;
};

function removeDataLabelsByDistance() {
    var labels = document.querySelectorAll(".x-axis .tick text");
    var lastTickShown = labels[0];
    var lastTickShown1 = null;
    var lastTickShown2 = null;
    labels.forEach((label, i) => {
        if (!i) return;
        if (
            getDistanceBetweenElements(label, lastTickShown) < CONSTANTS.defaultValues.maxDistanceBetweenTicks ||
            (lastTickShown1 &&
                getDistanceBetweenElements(label, lastTickShown1) < CONSTANTS.defaultValues.maxDistanceBetweenTicks) ||
            (lastTickShown2 &&
                getDistanceBetweenElements(label, lastTickShown2) < CONSTANTS.defaultValues.maxDistanceBetweenTicks)
        ) {
            label.remove();
        } else {
            lastTickShown2 = lastTickShown1;
            lastTickShown1 = lastTickShown;
            lastTickShown = label;
        }
    });
}

const modifyAndHideTicks = () => {
    const tickTexts = d3.selectAll(".x-axis .tick text").nodes();
    tickTexts.forEach((tick) => {
        // TODO: Hide Ticks if they overlap
        // To check if the tick is overlapping, width of vertical tick (height of the tick)
        const tickNodeLength = tick.getComputedTextLength();
        if (tickNodeLength > grafieks.chartsConfig.margins.rotatingMargin) {
            tick.innerHTML = getClippedTickText(tick, tickNodeLength);
        }
    });
    removeDataLabelsByDistance();
};

module.exports = {
    isTickTextOverflowing,
    modifyAndHideTicks
};
