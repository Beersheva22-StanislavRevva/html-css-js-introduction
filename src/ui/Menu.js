const ACTIVE = 'active'
export default class Menu {
    #buttons
    #sectionElements
    #activeIndex
    #callbackFn
    constructor(parentId, sections) {
        //sections - array of objects 
        //each object {title: string, id: string}
        //this.#callbackFn = callbackFn;
        this.#fillButtons(parentId, sections);
        //this.#setSectionElements(sections.map(s => s.id));
        //this.#addListeners();


    }
    #fillButtons(parentId, sections) {
        const parentElement = document.getElementById(parentId);
        parentElement.innerHTML = sections.map((t) => `<button class="menu-button" id=${t.id}>${t.title}</button>`).join('');
        this.#buttons = parentElement.childNodes;
    }
}
//       #setSectionElements(sectionIds) {
//         this.#sectionElements = sectionIds.map(id => document.getElementById(id));
//     }
//     #addListeners() {
//         this.#buttons.forEach((b, index) => b.addEventListener('click',
//        this.#handler.bind(this, index)))
//     }
//     async #handler(index) {
//         if (this.#activeIndex == undefined || index != this.#activeIndex) {
            
//             if(this.#activeIndex != undefined) {
//                  this.#buttons[this.#activeIndex].classList.remove(ACTIVE);
//                  this.#sectionElements[this.#activeIndex].hidden = true;
//             }
//              this.#buttons[index].classList.add(ACTIVE);
//              await this.#callbackFn(index);
//             this.#sectionElements[index].hidden = false;
           
//             this.#activeIndex = index;
            

//         }
//     }
//     getActiveIndex() {
//         return this.#activeIndex;
//     }

