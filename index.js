import $ from "jquery";
import isNode from "detect-node";
import template from "./template.html";
import "bootstrap/js/tab";

export function createState(request){
  const page = request.url.split("/").pop() || "home";

  return {
    page: page
  };
}

export function render(document, state){
  $("<title>").text("jQuery App").appendTo(document.head);

  let body = $(document.body);
  body.append(template());

  body.find(`[aria-controls=${state.page}]`).parent().addClass("active");
  body.find(`#${state.page}`).addClass("active");
}

if(!isNode) {
  $('a[data-toggle="tab"]').on('shown.bs.tab', (e) => {
    history.pushState({}, null, $(e.target).attr("aria-controls"));
  });
}
