// init tooltipped
export const initTooltip = () => {
    const M = typeof window !== "undefined" ? require("materialize-css") : null;
    // tooltipped
    const elems = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(elems, {});
    }