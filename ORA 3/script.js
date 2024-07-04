
let studentID = "_20215385"; // Mã số sinh viên

function addGroupItem() {
    const newGroup = document.createElement('div');
    const groupName = "GROUP ITEM" + studentID;
    newGroup.innerHTML = `
    <div class="row_title">
    <div class="info_Student">
        <span>
            <h3 id="groupName" ondblclick="editGroupName(this)">${groupName}</h3>
        </span>

        <span>
            <button onclick="deleteGroupItem(this)" class="swap normal_text">
                <img src="image/icons8-delete-50.png" alt="edit-icon" style="width: 15px; ">
                Xóa nhóm</button>
        </span>

        <span>
            <button onclick="addInfoItem(this)" class="swap normal_text">
                <img src="image/edit.png" alt="edit-icon" style="width: 15px; ">
                Thêm mục thông tin</button>
        </span>

        <span>
            <button onclick="addGroupItem()" class="swap normal_text">
                <img src="image/edit.png" alt="edit-icon" style="width: 15px; ">
                Thêm mục nhóm</button>
        </span>
    </div>
    <hr>
    <div class="row wrap">
    </div>
</div>
    `;
    newGroup.classList.add('infoGroup');
    newGroup.setAttribute('id', 'infoGroup' + studentID); // ID của nhóm thông tin
    document.getElementById('infoContainer').appendChild(newGroup);
}

function editGroupName(element) {
    const newName = prompt("Nhập tên mới cho nhóm thông tin:");
    if (newName !== null) {
        element.textContent = newName + studentID;
        // Cập nhật tên nhóm thông tin 
    }
}

function editInfoItem(element) {
    const newValue = prompt("Nhập giá trị mới cho mục thông tin:");
    if (newValue !== null) {
        element.textContent = newValue + ":";
        // Cập nhật giá trị mục thông tin 
    }
}

function deleteGroupItem(button) {
    const groupName = button.parentElement.parentElement.parentElement.parentElement;
    const groupNameElement = groupName.querySelector('h3');
    const confirmation = confirm("Xác nhận xóa " + groupNameElement.textContent + "?");
    if (confirmation == true) {
        groupName.remove();
        // Xóa nhóm thông tin 
    }
}

function deleteInfoItem(button) {
    const infoItem = button.parentElement.parentElement;
    const confirmation = confirm("Xác nhận xóa " + infoItem.querySelector('strong').textContent + "?");
    if (confirmation == true) {
        infoItem.remove();
        // Xóa mục thông tin 
    }
}



function addInfoItem(element) {
    const newInfo = document.createElement('div');
    newInfo.classList.add('info_item');

    // Add a container for input type selection
    const inputTypeContainer = document.createElement('div');
    inputTypeContainer.classList.add('input-type-container');

    // Add select element for choosing input type
    const inputTypeSelect = document.createElement('select');
    inputTypeSelect.id = 'info-item-type';
    inputTypeSelect.addEventListener('change', function () {
        updateInputType(newInfo, this.value);
    });

    const defaultOption = document.createElement('option');
    defaultOption.value = ""; // Set value to empty string
    defaultOption.textContent = "Chọn kiểu INPUT";
    defaultOption.selected = true; // Mark the default option as selected
    inputTypeSelect.appendChild(defaultOption);

    // Add options for different input types
    const textOption = document.createElement('option');
    textOption.value = 'text';
    textOption.textContent = 'Text';
    inputTypeSelect.appendChild(textOption);

    const selectOption = document.createElement('option');
    selectOption.value = 'select';
    selectOption.textContent = 'Select';
    inputTypeSelect.appendChild(selectOption);

    // Add additional options for other input types if needed

    inputTypeContainer.appendChild(inputTypeSelect);

    // Add standard content for new information item
    newInfo.innerHTML = `
      <strong class="italic_text" onclick="editInfoItem(this)">Mục thông tin:</strong>
      <span>
        <button onclick="deleteInfoItem(this)" class="swap normal_text">
          <img src="image/icons8-delete-50.png" alt="edit-icon" style="width: 15px; ">
        </button>
      </span>
      <br />
    `;

    // Append input type selection container and then the new information item
    newInfo.appendChild(inputTypeContainer);
    element.parentElement.parentElement.parentElement.querySelector('.row').appendChild(newInfo);

    // // Initially render a text input by default
    // updateInputType(newInfo, 'text');
}

function updateInputType(infoItem, inputType) {
    // Remove any existing input element
    const existingInput = infoItem.querySelector('input, select');
    if (existingInput) {
        existingInput.remove();
    }

    let inputHTML = '';
    switch (inputType) {
        case 'text':
            inputHTML = '<input required type="text" id="edit-name" placeholder="Mục thông tin">';
            break;
        case 'select':
            inputHTML = `
          <select id="info-item-type">
          </select>
          <button id="addOptionButton" onclick = "addOptionButton(this)">Thêm tùy chọn mới</button>
        `;
            break;
        // Add cases for other input types if needed
        default:
            alert('Kiểu input không hợp lệ');
            return;
    }

    // Add the new input element
    infoItem.querySelector('.input-type-container').insertAdjacentHTML('afterend', inputHTML);
}


function addOptionButton(element) {
    const selectElement = element.parentElement.querySelector('select');
    const newOption = document.createElement('option');

    // Prompt the user for the option name and value
    const optionName = prompt("Nhập tên tùy chọn:");

    if (optionName !== "") {
        newOption.textContent = optionName;
        newOption.value = optionName;
        selectElement.appendChild(newOption);
    }
};
