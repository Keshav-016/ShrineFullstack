export function createMemberCard(container, data) {
    let card = document.createElement('div');
    card.setAttribute("class", "border-0 col-6 col-md-3");
    card.innerHTML = `
    <div class="mb-4">
        <img src=${data.imgUrl} alt="man" class="w-100">
    </div>
    <div class="d-flex gap-2 justify-content-center">
        <div class="d-none d-lg-block">
            <img src="./images/members/share.png" alt="share">
        </div>
        <hr>
        <div>
            <h4 class="card-title">${data.title}</h4>
            <p>${data.content}</p>
        </div>
    </div>
    `
    container.appendChild(card);

}