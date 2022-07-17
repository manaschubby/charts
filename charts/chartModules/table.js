const { Tabulator } = require("tabulator-tables");

const CONSTANTS = require("../constants");

const utils = require("../utils");

const tableId = "example";
let tableStatus = false;

const defaultTableChartConfig = {
    defaultCellBorderStatus: true,
    defaultCellHoverStatus: true,
    defaultCompactStatus: false,
    defaultSearchStatus: true,
    defaultGrandTotalStatus: false,
    defaultRowAlternateStatus: true,
    defaultBatchsize: 50
};

function addCss() {
    const link = "https://unpkg.com/tabulator-tables@5.2.7/dist/css/tabulator.min.css";
    const linkTag = document.createElement("link");
    linkTag.href = link;
    linkTag.rel = "stylesheet";
    document.head.appendChild(linkTag);

    // <link href="" rel="stylesheet">
    // <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.7/dist/js/tabulator.min.js"></script>
}

function init() {
    utils.getChartsDiv().node().innerHTML = `<table id="${tableId}" class="ui celled table very compact">
                <thead></thead>
                <tbody></tbody>
                <tfoot></tfoot>
            </table>`;
}

function generateNewTr(row, type = "td") {
    var tr = document.createElement("tr");
    var rowValues = Object.values(row);
    for (var i = 0; i < rowValues.length; i++) {
        var td = document.createElement(type);
        td.innerText = rowValues[i];
        tr.appendChild(td);
    }
    return tr;
}

function addNewRow(table) {
    var tr = document.createElement("tr");
    for (var i = 0; i < 3; i++) {
        var td = document.createElement("td");
        td.innerText = "Test" + i;
        tr.appendChild(td);
    }
    table.row.add(tr);
}

function addHeader() {
    var table = document.querySelector("thead");
    table.appendChild(generateNewTr(window.data[2], "th"));
}

function addFooter() {
    var table = document.querySelector("tfoot");
    table.appendChild(generateNewTr(window.data[1], "th"));
}

function getColumnNamesConfigArray(data) {
    return data.map((d) => ({ data: d }));
}

function setCompact(compactStatus) {
    if (compactStatus) {
        document.querySelector("table").classList.add("compact");
    } else {
        document.querySelector("table").classList.remove("compact");
    }
}
function grandTotalStatus(totalStatus, hasNumerical) {
    if (totalStatus) {
        document.querySelectorAll(".tabulator-footer").forEach((e) => {
            e.style.display = "block";
        });
        setTimeout(function () {
            var totalFooter = document.querySelector(".tabulator-footer .tabulator-cell");
            if (totalFooter && hasNumerical) {
                totalFooter.innerHTML = "<b>Grand Total</b>";
            }
        }, 0);
    } else {
        document.querySelectorAll(".tabulator-footer").forEach((e) => {
            e.style.display = "none";
        });
    }
}

function clearChart() {
    init();
}
function updateTable() {
    addDataToRow();
}

function addCellBorder() {
    document.querySelector("#cellBorderStyle") && document.querySelector("#cellBorderStyle").remove();
}

function removeCellBorder() {
    addCellBorder();
    var styleTag = document.createElement("style");
    styleTag.id = "cellBorderStyle";
    styleTag.innerHTML = " td{ border: 0 !important; }";
    document.head.appendChild(styleTag);
}

function removeHoverBackground() {
    document.querySelector("#cellHoverStyle") && document.querySelector("#cellHoverStyle").remove();
}

function addHoverBackground() {
    var styleTag = document.createElement("style");
    styleTag.id = "cellHoverStyle";
    styleTag.innerHTML = ".tabulator-row.tabulator-selectable:hover { background-color: #d9d9d988; }";
    document.head.appendChild(styleTag);
}

function removeRowAlternateColor() {
    document.querySelector("#alternateRow") && document.querySelector("#alternateRow").remove();
}

function addRowAlternateColor() {
    if (document.querySelector("#alternateRow")) {
        return;
    }
    var styleTag = document.createElement("style");
    styleTag.id = "alternateRow";
    styleTag.innerHTML = ".tabulator-row-odd { background-color: #d9d9d933; }";
    document.head.appendChild(styleTag);
}

function setLazyLoadHandler() {
    var tableScrollBody = document.querySelector(".dataTables_scrollBody");
    tableScrollBody.addEventListener("scroll", function (event) {
        var element = event.target;
        if (!window.dataTableValues[window.counter]) {
            return;
        }
        if (element.scrollTop + element.clientHeight + 100 > element.scrollHeight) {
            console.log("Adding new data");
            window.scrollBarPosition = Math.abs(element.clientHeight - element.scrollTop);
            updateTable();
        }
    });
}

function addDataToRow() {
    tableInstance.rows.add(window.dataTableValues[window.counter++]).draw();
}

const chartGeneration = () => {
    const data = grafieks.dataUtils.rawData;
    window.data = data;

    init();

    let {
        defaultCellBorderStatus,
        defaultCellHoverStatus,
        defaultCompactStatus,
        defaultSearchStatus,
        defaultRowAlternateStatus,
        defaultBatchsize,
        defaultGrandTotalStatus
    } = defaultTableChartConfig;

    let {
        cellBorderStatus = defaultCellBorderStatus,
        hoverStatus = defaultCellHoverStatus,
        compactStatus = defaultCompactStatus,
        searchStatus = defaultSearchStatus,
        rowAlternateStatus = defaultRowAlternateStatus,
        batchSize = defaultBatchsize,
        rowWiseGrandTotal: totalStatus = defaultGrandTotalStatus
    } = grafieks.plotConfiguration;

    var hasNumerical = false;

    var minMaxFilterEditor = function (cell, onRendered, success, cancel, editorParams) {
        var end;

        var container = document.createElement("span");

        //create and style inputs
        var start = document.createElement("input");
        start.setAttribute("type", "number");
        start.setAttribute("placeholder", "Min");

        start.style.padding = "4px";
        start.style.width = "50%";
        start.style.boxSizing = "border-box";

        start.value = cell.getValue();

        function buildValues() {
            success({
                start: start.value,
                end: end.value
            });
        }

        function keypress(e) {
            if (e.keyCode == 13) {
                buildValues();
            }

            if (e.keyCode == 27) {
                cancel();
            }
        }

        end = start.cloneNode();
        end.setAttribute("placeholder", "Max");

        start.addEventListener("change", buildValues);
        start.addEventListener("blur", buildValues);
        start.addEventListener("keydown", keypress);

        end.addEventListener("change", buildValues);
        end.addEventListener("blur", buildValues);
        end.addEventListener("keydown", keypress);

        container.appendChild(start);
        container.appendChild(end);

        return container;
    };

    //custom max min filter function
    function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams) {
        //headerValue - the value of the header filter element
        //rowValue - the value of the column in this row
        //rowData - the data for the row being filtered
        //filterParams - params object passed to the headerFilterFuncParams property

        if (rowValue) {
            if (headerValue.start != "") {
                if (headerValue.end != "") {
                    return rowValue >= headerValue.start && rowValue <= headerValue.end;
                } else {
                    return rowValue >= headerValue.start;
                }
            } else {
                if (headerValue.end != "") {
                    return rowValue <= headerValue.end;
                }
            }
        }

        return true; //must return a boolean, true if it passes the filter.
    }

    var table = new Tabulator("#example", {
        layout: "fitColumns",
        height: "calc(100vh - 26px)",
        movableColumns: true,
        columns: data[2].map((d, i) => {
            var obj = { title: d, field: d };
            if (data[1][i] !== "") {
                console.log("Value", data[1][i]);
                obj["bottomCalc"] = "sum";

                if (searchStatus) {
                    obj.headerFilter = minMaxFilterEditor;
                    obj.headerFilterFunc = minMaxFilterFunction;
                    obj.headerFilterLiveFilter = false;
                }

                if (!hasNumerical) {
                    hasNumerical = true;
                }
            } else {
                if (searchStatus) {
                    obj.headerFilter = "input";
                }
            }
            return obj;
        })
    });

    setTimeout(function () {
        table.setData(data[0]);
    }, 0);
};

module.exports = chartGeneration;
