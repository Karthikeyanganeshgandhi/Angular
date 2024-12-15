import { Component } from "@angular/core";

@Component({
    selector: 'example',
    templateUrl:'./example.component.html',
    styleUrls:['./example.component.css']
})

export class ExampleComponent{

    name = ''
    isDisable = false
    isPresent = false
    languages = ["HTML","CSS","JS","Angular","jQuery"]

}