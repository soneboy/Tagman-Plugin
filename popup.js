var submitButton = document.getElementById('submitButton');

 submitButton.onclick = function(){
      var fourmTabs = [];

      chrome.tabs.query({}, function(tabs) {

          fourmTabs[0] = tabs[0];

          var paramValueName = document.getElementById('param_value_name').value + " ";
          var customKeyName = document.getElementById('custom_key_name').value + " ";
          var paramValuePlaceholder = document.getElementById('param_value_placeholder').value;
          var customKeyPlaceholder = document.getElementById('custom_key_placeholder').value;
          var paramValueDescription = document.getElementById('param_value_description').value;
          var customKeyDescription = document.getElementById('custom_key_description').value;
          var paramValueExample = document.getElementById('param_value_example').value;
          var customKeyExample = document.getElementById('custom_key_example').value;
          var fieldsBefore = document.getElementById('fields_before').value;
          var fieldsCount = document.getElementById('fields_count').value;

          var message = document.getElementById('message');
          var placeholderTrimed = customKeyPlaceholder.substring(0,3);

          if(placeholderTrimed != 'cus'){
              message.innerHTML = 'This placeholder must start with "custom" word';
          } else {


              var input_by_order_name;


              var input_by_order_name = [paramValueName, customKeyName];  // kako pocinju imena promenljivih?
              var input_by_order_placeholder = [paramValuePlaceholder, customKeyPlaceholder]; // kako pocinju placeholder-i promenljivih?
              var input_by_order_description = [paramValueDescription, customKeyDescription]; // kako pocinju opisi promenljivih?
              var input_by_example_description = [paramValueExample, customKeyExample]; //kako pocinju primeri promenljivih?


              var polje = 'var firstKnownId = document.getElementById("tagConfigAttributes-1-id"); var attrFieldContainer = firstKnownId.parentNode.parentNode.parentNode.parentNode; attrFieldContainer.innerHTML +=\'';
              var redniBrojPolja = fieldsBefore;  // koliko ima vec upisanih polja?
              var ukupnoNovihPolja = fieldsCount; // koliko novih polja je potrebno? Ukoliko treba 10 parova (kljuc/vrednost), treba upisati: 20


              var input_name,
                  input_placeholder,
                  input_description,
                  input_example;

              for (i = 1; i <= ukupnoNovihPolja; i++) {

                  if (input_by_order_name) {
                      input_name = input_by_order_name[i % 2] + " No." + Math.round(i / 2);
                      input_placeholder = input_by_order_placeholder[i % 2] + "_" + Math.round(i / 2);
                      input_description = input_by_order_description[i % 2] + " No." + Math.round(i / 2);
                      input_example = input_by_example_description[i % 2] + "_" + Math.round(i / 2);
                  }
                  else {
                      input_name = "urm Category " + i;
                      input_placeholder = "param_crm_category_" + i;
                      input_description = "With the optional parameter urmCategory, you can also categorise the visitors.";
                      input_example = "single";
                  }

                  redniBrojPolja += 1;

                  var placeholderSubstring = input_placeholder.substring(0, 3);

                  if (placeholderSubstring == 'cus') {
                      var localSelect = '<option label=\"static\" value=\"static\">static</option>';
                  }
                  else {
                      var localSelect = '<option label=\"mapped\" value=\"mapped\">mapped</option>';
                  }
                  polje += '<fieldset class=\"follows-fieldset form-optional\" id=\"fieldset-' + redniBrojPolja + '\"><div class=\"fieldset-inner\"><div class=\"row\"><input type=\"hidden\" name=\"tagConfigAttributes[' + redniBrojPolja + '][id]\" value=\"\"  class=\" span2 id\" rows=\"6\" id=\"tagConfigAttributes-' + redniBrojPolja + '-id\"><div class=\"span5 element-name\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-name\">Name<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-name\"class=\" span2 name\"type=\"text\"rows=\"6\"value=\"' + input_name + '\"name=\"tagConfigAttributes[' + redniBrojPolja + '][name]\"></div></div></div></div><div class=\"span5 element-placeholder\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-placeholder\">Placeholder<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input-append\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-placeholder\"class=\" span2 placeholder\"type=\"text\"rows=\"6\"value=\"' + input_placeholder + '\"name=\"tagConfigAttributes[' + redniBrojPolja + '][placeholder]\"><span class=\"add-on\"><i class=\"icon-question-sign icon-black\"rel=\"tooltip\"data-original-title=\"Placeholder must be Alpha Numeric with possible underscores\"></i></span></div></div></div></div><div class=\"span5 element-required\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-required\">Required</label><div class=\"controls\"><div class=\"input\"><input type=\"hidden\"value=\"0\"name=\"tagConfigAttributes[' + redniBrojPolja + '][required]\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-required\"class=\" span2 required\"type=\"checkbox\"rows=\"6\"value=\"1\"name=\"tagConfigAttributes[' + redniBrojPolja + '][required]\"></div></div></div></div><div class=\"span5 element-defaultType\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-defaultType\">Default Type</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + redniBrojPolja + '-defaultType\"class=\" span2 defaultType\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][defaultType]\">' + localSelect + '</select></div></div></div></div><div class=\"span5 element-determinedBy\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-determinedBy\">Determined By</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + redniBrojPolja + '-determinedBy\"class=\" span2 determinedBy\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][determinedBy]\"><option label=\"client\"value=\"client\">client</option><option label=\"product\"value=\"product\">product</option></select></div></div></div></div><div class=\"span5 element-validationRegex\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-validationRegex\">Regex to be met</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-validationRegex\"class=\" span2 validationRegex\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + redniBrojPolja + '][validationRegex]\"><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p></div></div></div></div><div class=\"span5 element-validationErrorMessage\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-validationErrorMessage\">Regex error message</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-validationErrorMessage\"class=\" span2 validationErrorMessage\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + redniBrojPolja + '][validationErrorMessage]\"></div></div></div></div><div class=\"span5 element-exampleValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-exampleValue\">Example Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + redniBrojPolja + '-exampleValue\"class=\" span2 exampleValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][exampleValue]\">' + input_example + '</textarea></div></div></div></div><div class=\"span5 element-description\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-description\">Description</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + redniBrojPolja + '-description\"class=\" span2 description\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][description]\">' + input_description + '</textarea></div></div></div></div><div class=\"span5 element-defaultValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-defaultValue\">Default Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + redniBrojPolja + '-defaultValue\"class=\" span2 defaultValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][defaultValue]\"></textarea></div></div></div></div></div></div><a class=\"remove sub-form-auto-remove\"rel=\"tooltip\"href=\"#\"data-original-title=\"remove\"><i class=\"icon-remove icon-white\"></i></a></fieldset>';
              }
              polje += '\'';

              var findShowCode = document.getElementById('showCode');
              findShowCode.value = polje;
              var findWrapper = document.getElementById('wrapper');
              var findSubmitCode = document.getElementById('submitCode');
              var getExeButton = document.getElementById('execute');
              window.exeCode = polje;
              getExeButton.onclick = function () {

                  chrome.tabs.executeScript({
                      code: window.exeCode
                  });

                  findSubmitCode.style.display = 'none';
                  var godJob = document.createElement('div');
                  godJob.style.width = '300px';
                  var godJobHeader = document.createElement('h1');
                  godJobHeader.style.color = 'white';
                  godJobHeader.innerHTML = 'Well Done Maniac!';
                  godJob.appendChild(godJobHeader);
                  document.body.appendChild(godJob);
                  setTimeout(function () {
                      window.close();
                  }, 3000);
              };

              findWrapper.style.display = 'none';
              findSubmitCode.style.display = 'block';
             }
         });
 };