Template.postsList.onRendered(function () {
  this.find('.wrapper')._uihooks = {
    insertElement: function (node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    moveElement: function (node, next) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $node.outerHeight(true);

      // �ҳ� next �� node ֮�����е�Ԫ��
      var $inBetween = $next.nextUntil(node);
      if ($inBetween.length === 0)
        $inBetween = $node.nextUntil(next);

      // �� node ����Ԥ��λ��
      $node.insertBefore(next);

      // ������ top ƫ������
      var newTop = $node.offset().top;

      // �� node *�ƻ�*��ԭʼ����λ��
      $node
        .removeClass('animate')
        .css('top', oldTop - newTop);

      // push every other element down (or up) to put them back
      $inBetween
        .removeClass('animate')
        .css('top', oldTop < newTop ? height : -1 * height);

      // ǿ���ػ�
      $node.offset();

      // ��������������Ԫ�ص� top ����Ϊ 0
      $node.addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    },
	removeElement: function(node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});