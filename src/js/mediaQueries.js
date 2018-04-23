const desktop = window.matchMedia("(min-width: 1200px)");
const nodesktop = window.matchMedia("(max-width: 1200px)");
const tab = window.matchMedia("(min-width: 700px)");
const mobile = window.matchMedia("(max-width: 700px)");

export { desktop, tab, mobile, nodesktop };
