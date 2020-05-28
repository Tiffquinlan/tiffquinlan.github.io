var date = new Date();
var year = date.getFullYear();
document.getElementById('year').textContent = year;
document.getElementById('last').textContent = document.lastModified;

WebFont.load({
  google: {
    families: [
      'Noto Sans JP', 'sans-serif','Acme'
    ]
  }
});