var showManiac = document.getElementById('wrapper');
var showHolic = document.getElementById('wrapper2');
var getSelect = document.getElementsByTagName('select')[0];
var firstBox = document.getElementById('firstBox');
var getWrpper3 = document.getElementById('wrapper3');
var getcodeReader = document.getElementById('codeReader');
var getCodeReaderButton = document.getElementById('codeReaderButton');
var getcodeReaderExecute = document.getElementById('codeReaderExecute');
var getExecuteBox = document.getElementById('executeCodeReader');
var getSubmitCodeReader = document.getElementById('submitCodeReader');
var getinsertFieldButton = document.getElementById('insertFieldButton');
var getBottonHorExecute = document.getElementById('codeReaderExecuteInject');

var getManiac = document.getElementById('tagManiac').onclick = function(){
    console.log('njesraaaaa');

    showManiac.style.display = 'block';
    firstBox.style.display = 'none';
};

var getHolic = document.getElementById('regilarShit').onclick = function(){

    showHolic.style.display = 'block';
    firstBox.style.display = 'none';

};

getinsertFieldButton.onclick = function(){

    getWrpper3.style.display = 'block';
    firstBox.style.display = 'none';
};

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

getSelect.onchange = function(){

    getSelect.disabled = true;
    for(var k =1; k <= getSelect.value; k++){
        var createBox = document.createElement('div');
        createBox.setAttribute('id','box_' + k);
        createBox.style.margin = '25px';

        var createPar = document.createElement('p');
        createPar.innerHTML = "Paremeter " + k;

        var createName = document.createElement('input');
        createName.setAttribute('type','text');
        createName.setAttribute('id','name_' + k);
        createName.setAttribute('placeholder','Enter parameter name');
        createName.style.margin = '5px';


        var createPlaceHolder = document.createElement('input');
        createPlaceHolder.setAttribute('type','text');
        createPlaceHolder.setAttribute('id','placeholder_' + k);
        createPlaceHolder.setAttribute('placeholder','Enter parameter placeholder');
        createPlaceHolder.style.margin = '5px';


        var createExampleValue = document.createElement('input');
        createExampleValue.setAttribute('type','text');
        createExampleValue.setAttribute('id','example_' + k);
        createExampleValue.setAttribute('placeholder','Enter example value');
        createExampleValue.style.margin = '5px';



        var createDescription = document.createElement('textarea');
        createDescription.setAttribute('id','description_' + k);
        createDescription.setAttribute('placeholder','Enter description');
        createDescription.style.margin = '5px';


        var createFieldsNumber = document.createElement('input');
        createFieldsNumber.setAttribute('type','text');
        createFieldsNumber.setAttribute('id','fieldnumber_' + k);
        createFieldsNumber.setAttribute('placeholder','How many parameters?');
        createFieldsNumber.style.margin = '5px';

        createBox.appendChild(createPar);
        createBox.appendChild(createName);
        createBox.appendChild(createPlaceHolder);
        createBox.appendChild(createExampleValue);
        createBox.appendChild(createFieldsNumber);
        createBox.appendChild(createDescription);

        showHolic.appendChild(createBox);
    }

    var createFieldsBefore = document.createElement('input');
    createFieldsBefore.setAttribute('type','text');
    createFieldsBefore.setAttribute('id','fieldnumberBefore');
    createFieldsBefore.setAttribute('placeholder','How many fields before?');
    createFieldsBefore.style.margin = '5px';

    var creatButton = document.createElement('input');
    creatButton.setAttribute('type','submit');
    creatButton.setAttribute('id','regularButton');
    creatButton.setAttribute('value','Submit');

    showHolic.appendChild(createFieldsBefore);
    showHolic.appendChild(creatButton);

    var buttonClick = document.getElementById('regularButton');
    var getcreateFieldsBefore = document.getElementById('regularButton').value;

    buttonClick.onclick = function() {


        var fourmTabs = [];

        chrome.tabs.query({}, function (tabs) {

            fourmTabs[0] = tabs[0];

            var input_by_order_name_2 = [];
            var input_by_order_placeholder_2 = [];
            var input_by_order_description_2 = [];
            var input_by_example_description_2 = [];
            var ukupnoNovihPolja_2 = [];

            for (var l = 1; l <= getSelect.value; l++) {

                var paramName = document.getElementById('name_' + l).value;
                var paramPlaceholder = document.getElementById('placeholder_' + l).value;
                var paramDescription = document.getElementById('description_' + l).value;
                var paramExample = document.getElementById('example_' + l).value;
                var paramCount = document.getElementById('fieldnumber_' + l).value;

                input_by_order_name_2.push(paramName);
                input_by_order_placeholder_2.push(paramPlaceholder);
                input_by_order_description_2.push(paramDescription);
                input_by_example_description_2.push(paramExample);
                ukupnoNovihPolja_2.push(paramCount);
            }

            var polje_2 = 'var firstKnownId = document.getElementById("tagConfigAttributes-1-id"); var attrFieldContainer = firstKnownId.parentNode.parentNode.parentNode.parentNode; attrFieldContainer.innerHTML +=\'';
            var redniBrojPolja = getcreateFieldsBefore;
            var localSelectValue = false;

            var input_name = [],
                input_placeholder = [],
                input_description = [],
                input_example = [];


            for (var j = 0; j < input_by_order_name_2.length; j++) {

                for (var i = 1; i <= ukupnoNovihPolja_2[j]; i++) {

                    if (input_by_order_name_2) {
                        input_name = input_by_order_name_2[j] + " No." + i;
                        input_placeholder = input_by_order_placeholder_2[j] + i;
                        input_description = input_by_order_description_2[j] + " No." + i;
                        input_example = input_by_example_description_2[j] + i;
                    }

                    redniBrojPolja += 1;

                    var localSelect = localSelectValue ? '<option label=\"static\" value=\"static\">static</option>' : '<option label=\"mapped\" value=\"mapped\">mapped</option>';

                    polje_2 += '<fieldset class=\"follows-fieldset form-optional\" id=\"fieldset-' + redniBrojPolja + '\"><div class=\"fieldset-inner\"><div class=\"row\"><input type=\"hidden\" name=\"tagConfigAttributes[' + redniBrojPolja + '][id]\" value=\"\"  class=\" span2 id\" rows=\"6\" id=\"tagConfigAttributes-' + redniBrojPolja + '-id\"><div class=\"span5 element-name\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-name\">Name<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-name\"class=\" span2 name\"type=\"text\"rows=\"6\"value=\"' + input_name + '\"name=\"tagConfigAttributes[' + redniBrojPolja + '][name]\"></div></div></div></div><div class=\"span5 element-placeholder\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-placeholder\">Placeholder<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input-append\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-placeholder\"class=\" span2 placeholder\"type=\"text\"rows=\"6\"value=\"' + input_placeholder + '\"name=\"tagConfigAttributes[' + redniBrojPolja + '][placeholder]\"><span class=\"add-on\"><i class=\"icon-question-sign icon-black\"rel=\"tooltip\"data-original-title=\"Placeholder must be Alpha Numeric with possible underscores\"></i></span></div></div></div></div><div class=\"span5 element-required\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-required\">Required</label><div class=\"controls\"><div class=\"input\"><input type=\"hidden\"value=\"0\"name=\"tagConfigAttributes[' + redniBrojPolja + '][required]\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-required\"class=\" span2 required\"type=\"checkbox\"rows=\"6\"value=\"1\"name=\"tagConfigAttributes[' + redniBrojPolja + '][required]\"></div></div></div></div><div class=\"span5 element-defaultType\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-defaultType\">Default Type</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + redniBrojPolja + '-defaultType\"class=\" span2 defaultType\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][defaultType]\">' + localSelect + '</select></div></div></div></div><div class=\"span5 element-determinedBy\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-determinedBy\">Determined By</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + redniBrojPolja + '-determinedBy\"class=\" span2 determinedBy\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][determinedBy]\"><option label=\"client\"value=\"client\">client</option><option label=\"product\"value=\"product\">product</option></select></div></div></div></div><div class=\"span5 element-validationRegex\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-validationRegex\">Regex to be met</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-validationRegex\"class=\" span2 validationRegex\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + redniBrojPolja + '][validationRegex]\"><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p></div></div></div></div><div class=\"span5 element-validationErrorMessage\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-validationErrorMessage\">Regex error message</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + redniBrojPolja + '-validationErrorMessage\"class=\" span2 validationErrorMessage\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + redniBrojPolja + '][validationErrorMessage]\"></div></div></div></div><div class=\"span5 element-exampleValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-exampleValue\">Example Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + redniBrojPolja + '-exampleValue\"class=\" span2 exampleValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][exampleValue]\">' + input_example + '</textarea></div></div></div></div><div class=\"span5 element-description\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-description\">Description</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + redniBrojPolja + '-description\"class=\" span2 description\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][description]\">' + input_description + '</textarea></div></div></div></div><div class=\"span5 element-defaultValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + redniBrojPolja + '-defaultValue\">Default Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + redniBrojPolja + '-defaultValue\"class=\" span2 defaultValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + redniBrojPolja + '][defaultValue]\"></textarea></div></div></div></div></div></div><a class=\"remove sub-form-auto-remove\"rel=\"tooltip\"href=\"#\"data-original-title=\"remove\"><i class=\"icon-remove icon-white\"></i></a></fieldset>';
                }
            }

            polje_2 += '\'';

            var findShowCode = document.getElementById('showCode');
            findShowCode.value = polje_2;
            var findWrapper = document.getElementById('wrapper2');
            var findSubmitCode = document.getElementById('submitCode');
            var getExeButton = document.getElementById('execute');
            window.exeCode = polje_2;
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

        });
    };
};

var getHolicrrrrr = document.getElementById('new_field_submit').onclick = function(){

     var newName = document.getElementById('new_name').value;
     var newPlaceholder2 = document.getElementById('new_placeholder').value;
     var newStaticOrMapped = document.getElementById('static_or_mapped').value;
     var newRequired = document.getElementById('new_required');
     var newDescription2 = document.getElementById('new_description').value;
     var newExample = document.getElementById('new_example').value;
     var newfieldsBefore = document.getElementById('new_field').value;
     var isChacked = newRequired.checked ? 'newRequiredfield.checked=true;' : '';

     var fourmTabs = [];

     chrome.tabs.query({}, function (tabs) {

     fourmTabs[0] = tabs[0];
         console.log(newRequired);
         var injectString = "var takeField = " + newfieldsBefore + " + 1;var test2 = document.getElementsByClassName('span5 element-defaultType');if((takeField - 1) >= (test2.length -1)){alert('There is no that mauch fields!');}else{var takeNameArray = [];var takePlaceholderArray = [];var takeRequiredfieldArray = [];var takeDefaulttypeArray = [];var takeExamplevalueArray = [];var takeDescriptionArray = [];for (var s = 0; s <= test2.length - 1; s++) {if (s >= takeField) {var getName = document.getElementById('tagConfigAttributes-' + s + '-name').value;var getPlaceholder = document.getElementById('tagConfigAttributes-' + s + '-placeholder').value;var getRequiredfield = document.getElementById('tagConfigAttributes-' + s + '-required').value;var getDefaulttype = document.getElementById('tagConfigAttributes-' + s + '-defaultType').value;var getExmpleValue = document.getElementById('tagConfigAttributes-' + s + '-exampleValue').value;var getDescription = document.getElementById('tagConfigAttributes-' + s + '-description').value;takeNameArray.push(getName);takePlaceholderArray.push(getPlaceholder);takeRequiredfieldArray.push(getRequiredfield);takeDefaulttypeArray.push(getDefaulttype);takeExamplevalueArray.push(getExmpleValue);takeDescriptionArray.push(getDescription);}}var firstKnownId = document.getElementById('tagConfigAttributes-1-id');var attrFieldContainer = firstKnownId.parentNode.parentNode.parentNode.parentNode;var input_name = takeNameArray[takeNameArray.length -1];var input_placeholder = takePlaceholderArray[takeNameArray.length -1];var input_example = takeExamplevalueArray[takeNameArray.length -1];var input_description = takeDescriptionArray[takeNameArray.length -1];attrFieldContainer.innerHTML += '<fieldset class=\"follows-fieldset form-optional\" id=\"fieldset-' + test2.length + '\"><div class=\"fieldset-inner\"><div class=\"row\"><input type=\"hidden\" name=\"tagConfigAttributes[' + test2.length + '][id]\" value=\"\"  class=\" span2 id\" rows=\"6\" id=\"tagConfigAttributes-' + test2.length + '-id\"><div class=\"span5 element-name\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-name\">Name<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + test2.length + '-name\"class=\" span2 name\"type=\"text\"rows=\"6\"value=\"' + input_name + '\"name=\"tagConfigAttributes[' + test2.length + '][name]\"></div></div></div></div><div class=\"span5 element-placeholder\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-placeholder\">Placeholder<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input-append\"><input id=\"tagConfigAttributes-' + test2.length + '-placeholder\"class=\" span2 placeholder\"type=\"text\"rows=\"6\"value=\"' + input_placeholder + '\"name=\"tagConfigAttributes[' + test2.length + '][placeholder]\"><span class=\"add-on\"><i class=\"icon-question-sign icon-black\"rel=\"tooltip\"data-original-title=\"Placeholder must be Alpha Numeric with possible underscores\"></i></span></div></div></div></div><div class=\"span5 element-required\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-required\">Required</label><div class=\"controls\"><div class=\"input\"><input type=\"hidden\"value=\"0\"name=\"tagConfigAttributes[' + test2.length + '][required]\"><input id=\"tagConfigAttributes-' + test2.length + '-required\"class=\" span2 required\"type=\"checkbox\"rows=\"6\"value=\"1\"name=\"tagConfigAttributes[' + test2.length + '][required]\"></div></div></div></div><div class=\"span5 element-defaultType\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-defaultType\">Default Type</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + test2.length + '-defaultType\"class=\" span2 defaultType\"rows=\"6\"name=\"tagConfigAttributes[' + test2.length + '][defaultType]\"><option label=\"mapped\"value=\"mapped\">mapped</option><option label=\"static\"value=\"static\">static</option></select></div></div></div></div><div class=\"span5 element-determinedBy\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-determinedBy\">Determined By</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + test2.length + '-determinedBy\"class=\" span2 determinedBy\"rows=\"6\"name=\"tagConfigAttributes[' + test2.length + '][determinedBy]\"><option label=\"client\"value=\"client\">client</option><option label=\"product\"value=\"product\">product</option></select></div></div></div></div><div class=\"span5 element-validationRegex\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-validationRegex\">Regex to be met</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + test2.length + '-validationRegex\"class=\" span2 validationRegex\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + test2.length + '][validationRegex]\"><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p></div></div></div></div><div class=\"span5 element-validationErrorMessage\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-validationErrorMessage\">Regex error message</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + test2.length + '-validationErrorMessage\"class=\" span2 validationErrorMessage\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + test2.length + '][validationErrorMessage]\"></div></div></div></div><div class=\"span5 element-exampleValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-exampleValue\">Example Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + test2.length + '-exampleValue\"class=\" span2 exampleValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + test2.length + '][exampleValue]\">' + input_example + '</textarea></div></div></div></div><div class=\"span5 element-description\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-description\">Description</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + test2.length + '-description\"class=\" span2 description\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + test2.length + '][description]\">' + input_description + '</textarea></div></div></div></div><div class=\"span5 element-defaultValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + test2.length + '-defaultValue\">Default Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + test2.length + '-defaultValue\"class=\" span2 defaultValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + test2.length + '][defaultValue]\"></textarea></div></div></div></div></div></div><a class=\"remove sub-form-auto-remove\"rel=\"tooltip\"href=\"#\"data-original-title=\"remove\"><i class=\"icon-remove icon-white\"></i></a></fieldset>';var newFieldName = document.getElementById('tagConfigAttributes-' + takeField + '-name');var newPlaceholder = document.getElementById('tagConfigAttributes-' + takeField + '-placeholder');var newRequiredfield = document.getElementById('tagConfigAttributes-' + takeField + '-required');var newDefaulttype = document.getElementById('tagConfigAttributes-' + takeField + '-defaultType');var newExmpleValue = document.getElementById('tagConfigAttributes-' + takeField + '-exampleValue');var newDescription = document.getElementById('tagConfigAttributes-' + takeField + '-description');newFieldName.value = '" + newName + "';newPlaceholder.value = '" + newPlaceholder2 + "';newRequiredfield.value = 1;newDefaulttype.value = '" + newStaticOrMapped + "';newExmpleValue.value = '" + newExample + "';newDescription.value = '" + newDescription2 + "';" + isChacked + " }console.log(newRequiredfield);for(var m = 0; m < takeNameArray.length - 1; m++){var getName2 = document.getElementById('tagConfigAttributes-' + (m + (test2.length - takeNameArray.length)) + '-name');var getPlaceholder2 = document.getElementById('tagConfigAttributes-' + (m + (test2.length - takeNameArray.length)) + '-placeholder');var getRequiredfield2 = document.getElementById('tagConfigAttributes-' + (m + (test2.length - takeNameArray.length))+ '-required');var getDefaulttype2 = document.getElementById('tagConfigAttributes-' + (m + (test2.length - takeNameArray.length)) + '-defaultType');var getExmpleValue2 = document.getElementById('tagConfigAttributes-' + (m + (test2.length - takeNameArray.length)) + '-exampleValue');var getDescription2 = document.getElementById('tagConfigAttributes-' + (m + (test2.length - takeNameArray.length)) + '-description');getName2.value = takeNameArray[m];getPlaceholder2.value = takePlaceholderArray[m];getRequiredfield2.value = takeRequiredfieldArray[m];getDefaulttype2.value = takeDefaulttypeArray[m];getExmpleValue2.value = takeExamplevalueArray[m];getDescription2.value = takeDescriptionArray[m];}";
        window.codeInjector = injectString;

     chrome.tabs.executeScript({
     code: window.codeInjector
     });

     });

};
    getCodeReaderButton.onclick = function (){
    
    getcodeReader.style.display = 'block';
    firstBox.style.display = 'none';
    
    codeReaderExecute.onclick = function(){
           
    var test = String(document.getElementById('pasteCode').value);
    
    //'var custom_test = [%custom_test%];//req# var param_test2 = [%param_test2];var custom_test3 = [%custom_test3%];//req# var param_njesra = [%param_njesra%]//req#;var custom_shit = [%custom_shit%];var custom_trip = [%custom_trip%];//req#';
    var testArray = test.split(';');
    console.log(testArray);

   var newArray = [];
   var nameArray = [];
   var requiredArray = [];
   var firstIndex = 'custom_';
   var secondIndex = '=';
   var firstIndex2 = 'param_';
   
    
for(var i=0; i<testArray.length;i++){
    
    //take placeholder block
    
    var findFirstIndex = testArray[i].search(firstIndex);
    var findLastIndex = testArray[i].search(secondIndex);
    
    var trimmedValue = testArray[i].substring(findFirstIndex,findLastIndex).trim();
   
    var findFirstIndex2 = testArray[i].search(firstIndex2);
    var trimmedValue2 = testArray[i].substring(findFirstIndex2,findLastIndex).trim();
    
    //name block
    
    var getName = trimmedValue.substring(trimmedValue.indexOf('_') + 1, trimmedValue.length);
    var capitalize = getName.replace(/^[a-z]/, function(m){ return m.toUpperCase() });
    if(capitalize !== ''){
        
        nameArray.push(capitalize);
    }
    
    // required block
    
    var requiredFieldFirstIndex = testArray[i].search('req');
    var requiredFieldLastIndex = testArray[i].search('#');
    var requiredField = testArray[i].substring(requiredFieldFirstIndex,requiredFieldLastIndex);
    requiredArray.push(requiredField);

    if(findFirstIndex > 0){
        
        newArray.push(trimmedValue);
        //newArray.push(trimmedValue2);
    }
    if(findFirstIndex2 > 0){
       
         newArray.push(trimmedValue2);
    }
}

var requiredArrayTrimmed = [];

for(var j = 1; j < requiredArray.length; j++){
    
        if(requiredArray[j] === ''){
            
            requiredArray[j] = 'opt';
        }
        
    requiredArrayTrimmed.push(requiredArray[j]);   
}

console.log(newArray);
console.log(nameArray);
console.log(requiredArrayTrimmed);

            
 var polje = 'var firstKnownId = document.getElementById("tagConfigAttributes-1-id"); var attrFieldContainer = firstKnownId.parentNode.parentNode.parentNode.parentNode; attrFieldContainer.innerHTML +=\'';
 
 for(var k=0;k < newArray.length; k++){
     
     polje += '<fieldset class=\"follows-fieldset form-optional\" id=\"fieldset-' + k +'\"><div class=\"fieldset-inner\"><div class=\"row\"><input type=\"hidden\" name=\"tagConfigAttributes[' + k + '][id]\" value=\"\"  class=\" span2 id\" rows=\"6\" id=\"tagConfigAttributes-' + k + '-id\"><div class=\"span5 element-name\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-name\">Name<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + k + '-name\"class=\" span2 name\"type=\"text\"rows=\"6\"value=\"' + nameArray[k] + '\"name=\"tagConfigAttributes[' + k + '][name]\"></div></div></div></div><div class=\"span5 element-placeholder\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-placeholder\">Placeholder<span class=\"required\">*</span></label><div class=\"controls\"><div class=\"input-append\"><input id=\"tagConfigAttributes-' + k + '-placeholder\"class=\" span2 placeholder\"type=\"text\"rows=\"6\"value=\"' + newArray[k] + '\"name=\"tagConfigAttributes[' + k + '][placeholder]\"><span class=\"add-on\"><i class=\"icon-question-sign icon-black\"rel=\"tooltip\"data-original-title=\"Placeholder must be Alpha Numeric with possible underscores\"></i></span></div></div></div></div><div class=\"span5 element-required\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-required\">Required</label><div class=\"controls\"><div class=\"input\"><input type=\"hidden\"value=\"0\"name=\"tagConfigAttributes[' + k + '][required]\"><input id=\"tagConfigAttributes-' + k + '-required\"class=\" span2 required\"type=\"checkbox\"rows=\"6\"value=\"1\"name=\"tagConfigAttributes[' + k + '][required]\"></div></div></div></div><div class=\"span5 element-defaultType\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-defaultType\">Default Type</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + k + '-defaultType\"class=\" span2 defaultType\"rows=\"6\"name=\"tagConfigAttributes[' + k + '][defaultType]\"><option label=\"mapped\"value=\"mapped\">mapped</option><option label=\"static\"value=\"static\">static</option></select></div></div></div></div><div class=\"span5 element-determinedBy\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-determinedBy\">Determined By</label><div class=\"controls\"><div class=\"input\"><select id=\"tagConfigAttributes-' + k + '-determinedBy\"class=\" span2 determinedBy\"rows=\"6\"name=\"tagConfigAttributes[' + k + '][determinedBy]\"><option label=\"client\"value=\"client\">client</option><option label=\"product\"value=\"product\">product</option></select></div></div></div></div><div class=\"span5 element-validationRegex\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-validationRegex\">Regex to be met</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + k + '-validationRegex\"class=\" span2 validationRegex\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + k + '][validationRegex]\"><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p><p class=\"help-block\"></p></div></div></div></div><div class=\"span5 element-validationErrorMessage\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-validationErrorMessage\">Regex error message</label><div class=\"controls\"><div class=\"input\"><input id=\"tagConfigAttributes-' + k + '-validationErrorMessage\"class=\" span2 validationErrorMessage\"type=\"text\"rows=\"6\"value=\"\"name=\"tagConfigAttributes[' + k + '][validationErrorMessage]\"></div></div></div></div><div class=\"span5 element-exampleValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-exampleValue\">Example Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + k + '-exampleValue\"class=\" span2 exampleValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + k + '][exampleValue]\">' + 'Some value' + '</textarea></div></div></div></div><div class=\"span5 element-description\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-description\">Description</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + k + '-description\"class=\" span2 description\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + k + '][description]\">' + 'Some description' + '</textarea></div></div></div></div><div class=\"span5 element-defaultValue\"><div class=\"control-group\"><label class=\"control-label\"for=\"tagConfigAttributes-' + k + '-defaultValue\">Default Value</label><div class=\"controls\"><div class=\"input\"><textarea id=\"tagConfigAttributes-' + k + '-defaultValue\"class=\" span2 defaultValue\"cols=\"80\"rows=\"6\"name=\"tagConfigAttributes[' + k + '][defaultValue]\"></textarea></div></div></div></div></div></div><a class=\"remove sub-form-auto-remove\"rel=\"tooltip\"href=\"#\"data-original-title=\"remove\"><i class=\"icon-remove icon-white\"></i></a></fieldset>';

 }
 polje +='\'';

   window.findToshowCode = document.getElementById('createdCode');
   findToshowCode.value = polje;
   //console.log(findToshowCode.value);     
        getSubmitCodeReader.style.display = 'none';
        getExecuteBox.style.display = 'block';
   };
   
             getBottonHorExecute.onclick = function(){
                 
             window.executeScriptCode = findToshowCode.value;
             console.log(window.executeScriptCode);
             
             chrome.tabs.executeScript({
                 
             code: window.executeScriptCode
     });  
   };
};