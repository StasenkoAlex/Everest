(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['simple-modal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"gallery__slider modal__gallery js-gallery\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.gallery : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "      <div class=\"gallery__slider-item\">\r\n        <div class=\"row\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.slide : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\r\n      </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "            <div class=\""
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.single : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + " gallery__slider-col\">\r\n              <div class=\"gallery__slider-frame\">\r\n                <img class=\"gallery__slider-img\" src=\"img/projects/"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.image : depth0), depth0))
    + "\" alt=\"\"/>\r\n              </div>\r\n            </div>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "col-lg-16";
},"6":function(container,depth0,helpers,partials,data) {
    return "col-lg-8";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "        <div class=\"modal__description\">"
    + ((stack1 = ((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"description","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "    <div class=\"modal__top clear\">\r\n      <div class=\"modal__top-item modal__top-item--name\">\r\n        "
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\r\n      </div>\r\n      <div class=\"modal__top-item modal__top-item--call\">Заказать звонок</div>\r\n      <div class=\"modal__top-item modal__top-item--tel\">8 800 707 09 10</div>\r\n      <button class=\"modal__top-item modal__top-item--close js-modal-close\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 40 40\">\r\n          <path d=\"M40,32.2c0,0.9-0.3,1.7-0.9,2.3l-4.6,4.6c-0.6,0.6-1.4,0.9-2.3,0.9c-0.9,0-1.7-0.3-2.3-0.9L20,29.2l-9.9,9.9 C9.5,39.7,8.7,40,7.8,40c-0.9,0-1.7-0.3-2.3-0.9l-4.6-4.6C0.3,33.8,0,33.1,0,32.2c0-0.9,0.3-1.7,0.9-2.3l9.9-9.9l-9.9-9.9 C0.3,9.5,0,8.7,0,7.8c0-0.9,0.3-1.7,0.9-2.3l4.6-4.6C6.2,0.3,6.9,0,7.8,0c0.9,0,1.7,0.3,2.3,0.9l9.9,9.9l9.9-9.9 C30.5,0.3,31.3,0,32.2,0c0.9,0,1.7,0.3,2.3,0.9l4.6,4.6C39.7,6.2,40,6.9,40,7.8c0,0.9-0.3,1.7-0.9,2.3L29.2,20l9.9,9.9 C39.7,30.5,40,31.3,40,32.2z\"/>\r\n        </svg>\r\n      </button>\r\n    </div>\r\n    \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.gallery : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    \r\n    <div class=\"modal__content\">\r\n      <div class=\"container--flex modal__advantages-list\">\r\n        <div class=\"modal__advantages-item\"><img src=\"img/projects/advantages1.png\" alt=\"\" class=\"modal__advantages-img\"></div>\r\n        <div class=\"modal__advantages-item\"><img src=\"img/projects/advantages2.png\" alt=\"\" class=\"modal__advantages-img\"></div>\r\n        <div class=\"modal__advantages-item\"><img src=\"img/projects/advantages3.png\" alt=\"\" class=\"modal__advantages-img\"></div>\r\n        <div class=\"modal__advantages-item\"><img src=\"img/projects/advantages4.png\" alt=\"\" class=\"modal__advantages-img\"></div>\r\n      </div>\r\n      \r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      \r\n      <div class=\"modal__form container--flex js-modal-form\">\r\n        <input type=\"text\" class=\"modal__input\" name=\"user_name\" placeholder=\"Ваше имя\" required>\r\n        <input type=\"text\" class=\"modal__input\" name=\"user_tel\" placeholder=\"Ваш телефон\" required>\r\n        <input type=\"text\" class=\"modal__variant js-modal-variant\">\r\n        <input type=\"submit\" class=\"btn modal__submit\" value=\"Узнать подробности\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>";
},"useData":true});
})();