const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d', {alpha: true});
const pi = Math.PI;

ctx.strokeStyle = 'grey';
ctx.fillStyle = 'grey';

ctx.arc(100, 90, 75, 0, 2*pi, true);
ctx.stroke();
ctx.fill();

const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'Если что-то получится бкдет чудо'},
    {type: 'columns', value: [
        '1111111111',
        '2222222222',
        '3333333333'
    ]}
]

const $site = document.querySelector('#site')

model.forEach(block => {
    console.log(block)
    let html = ''

    if (block.type === 'title'){
        html = `
            <n class="row">${block.value}</n>    

        `
    } else if (block.type === 'text'){
        html = `
            <n class="row">${block.value}</n>    

        ` 
    } else if (block.type === 'columns'){
        html = columns(block) 
    }

    $site.insertAdjacentHTML('beforeend', html)
})

function columns(block){
    let html =''
    block.value.forEach(item => {
        html += `<n class="row">${item}</n>` 
    })
    return `<h class='row'>${html}</h>`
}

