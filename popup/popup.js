var radioIdArr = [ "Disable_add_block", "Enable_add_block", "Enable_special_adds" ];
var radioArr = [];

document.addEventListener('click', function()
{
if (id = radioIdArr){
    for (var i = 0; i < radioIdArr.length; i++) {
        if (id = "Disable_add_block") { radioArr = id; }
        else if (id = "Enable_add_block") { radioArr = id; }
        else if (id = "Enable_special_adds") { radioArr = id; }
        else { console.log("The ifs did not work"); }
    }

    chrome.storage.sync.set({"isChecked": id}, function() {
        console.log('Value is set to ' + id);
      });
    try{
        storage.sync.get('isChecked', function(result) {
            console.log('Value is set to ' + result.isChecked);
            switch(result.isChecked){
                case 'Disable_add_block':
                    console.log("disabled");
                    radioIdArr[0].checked = true;
                    break;
                case 'Enable_add_block':
                    console.log("enabled");
                    radioIdArr[1].checked = true;
                    break;
                case 'Enable_special_adds':
                    console.log("special");
                    radioIdArr[2].checked = true;
                    break;
                default:
                    console.log("something went wrong with switch statement");
            }
        });
    }catch{console.log("could not read storage keys")}

}})



//Things that make me happy:
// * C# and JSON
// * Python
// * Not Javascript :)

//Things that make me angry: 
// * Geometorydash(Sometimes)
// * Renovating a village in minecraft(I want to comit warcrimes in minecraft now) 
// * programming in Javascript >:( (This one especially)


//Whelp. Atleast i tried...