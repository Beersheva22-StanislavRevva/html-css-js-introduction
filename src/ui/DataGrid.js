export default class DataGrid {
    #tBodyElement
    #keys
    #buttonNames
    constructor(parentId, columns, buttonNames) {
        //columns - array of objects {field: <name of key>,
        // headerName: <column name>}
        this.#keys = columns.map(c => c.field);
        this.#buttonNames = buttonNames;    
        this.#buildTableHeader(parentId, columns.map(c => c.headerName),buttonNames);
        

    }
     #buildTableHeader(parentId, columnNames,buttonNames) {
        const tableSectionElement = document.getElementById(parentId);
        tableSectionElement.innerHTML = this.#buildButtons(buttonNames) +
            `<div id="table-div">
              <table>
                    <thead> 
                        <tr>
                            ${columnNames.map(headerName => `<th>${headerName}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody id="${parentId}-table" >
                    </tbody>
                 </table>
             </div>`;
        this.#tBodyElement = document.getElementById(parentId + "-table");

    }
    #buildButtons(buttonNames) {
        return `<div id ="table-button-block"> ${buttonNames.map(name =>
                `<button class="table-button" id="${name}-button">${name}</button>`).join('')}</div>`;
        
    }
    fillData(rowsData) {
        this.#tBodyElement.innerHTML = rowsData.map(rd => this.#getRow(rd)).join('');
    }   
    #getRow(obj) {
        return `<tr>
                ${this.#keys.map(key => `<td>${obj[key]}</td>`).join('')}
                </tr>`    
    }
    insertRow(obj) {
        this.#tBodyElement.innerHTML += this.#getRow(obj);
    }
}