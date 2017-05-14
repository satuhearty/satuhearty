/**
 * JS file for the form
 *
 * @author Nik Yusof <nikyusof@satuhearty.com>
 * @copyright Satuhearty 2017
 */

(function($) {
  "use strict";

  $('.js-enable-section').on('click', function(e) {
    const sectionName = e.currentTarget.dataset.sectionId;
    const $sectionElement = $('#' + sectionName);
    const sectionFormElements = $('.js-' + sectionName + '-form').toArray();
    if ($sectionElement.hasClass('disabled')) {
      $sectionElement.removeClass('disabled');
    } else {
      $sectionElement.addClass('disabled');
    }
    if (sectionFormElements.length > 0) {
      sectionFormElements.forEach(function(e) {
        e.disabled = !e.disabled;
      });
    }
  });

})(jQuery);
