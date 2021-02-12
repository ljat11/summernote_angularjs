app = angular.module("app", ["summernote"]);
app.filter("trustAsHtml", [
  "$sce",
  function ($sce) {
    return function (text) {
      return $sce.trustAsHtml(text);
    };
  },
]);
app.controller("summerNoteController", function($scope) {
  $scope.options = {
    height: 300,
    focus: true,
    toolbar: [
            ['edit',['undo','redo']],
            ['headline', ['style']],
            ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
            ['fontface', ['fontname']],
            ['textsize', ['fontsize']],
            ['fontclr', ['color']],
            ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
            ['height', ['height']],
            ['table', ['table']],
            ['insert', ['link','picture','video','hr']],
            ['view', ['fullscreen', 'codeview']],
            ['help', ['help']]
        ]
  };
  $scope.text = "hola";
});
