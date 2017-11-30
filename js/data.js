var projectsData = [{
  name: 'test name',
  content: 'test content'
}];

var simpleLebedevo = {
  title: 'Лебедево',
  description: '<p>Охраняемый коттеджный поселок в черте Ярославля (микрорайон Резинотехника). Вся инфраструктура в шаговой доступности, есть остановка городского общественного транспорта.</p><p>Застройка в Лебедево почти завершена, каждый месяц сдаётся от 5 до 9 домов. К участкам подведено электричество, есть возможность газификации.</p>',
  gallery: [
    {slide: [
      {image: 'lebedevo/1.jpg', single: true}
    ]},
    {slide: [
      {image: "lebedevo/2.jpg"},
      {image: "lebedevo/3.jpg"},
      {image: "lebedevo/4.jpg"},
      {image: "lebedevo/5.jpg"}
    ]},{slide: [
      {image: "lebedevo/2.jpg"},
      {image: "lebedevo/3.jpg"},
      {image: "lebedevo/4.jpg"},
      {image: "lebedevo/5.jpg"}
    ]}
  ]
};
var simpleLebedevoTemplate = Handlebars.templates['simple-modal'];
var simpleLebedevoData = simpleLebedevoTemplate(simpleLebedevo);
projectsData.push({
  name: 'simpleLebedevo',
  content: simpleLebedevoData
});