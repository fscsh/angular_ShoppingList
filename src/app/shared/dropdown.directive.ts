import { Directive ,HostListener, HostBinding} from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})


export class DropdownDirective{
    @HostBinding('class.open') isOpen = false;

    @HostListener('mouseenter') mouseover(){
        this.isOpen = true;
    }
    @HostListener('mouseleave') mouseleave(){
        this.isOpen = false;
    }
}
