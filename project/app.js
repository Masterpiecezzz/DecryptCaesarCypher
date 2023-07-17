let input = document.querySelector('.input')
let button = document.querySelector('.button')
let output_place = document.querySelector('#three')

const alfabhet_uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const alfabhet_lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


button.addEventListener('click', () =>
{
    let encrypted_text = input.value
    let encrypted_text_marks = encrypted_text.split('')
    Array.prototype.slice.call(output_place.children).forEach((e)=> {if(e.nodeName != 'H2') {e.remove()}})
    for(step = 0; step <= (alfabhet_lowercase.length - 1); step++)
    {
        let decrypted_text = []
        for(i = 0; i < encrypted_text_marks.length; i++)
        {
            if(encrypted_text_marks[i] === ' ') {decrypted_text.push(' ')}
            else
            {
                for(j = 0; j < alfabhet_uppercase.length; j++)
                {
                    if(encrypted_text_marks[i] == alfabhet_uppercase[j])
                    {
                        let x = alfabhet_uppercase.indexOf(encrypted_text_marks[i])
                        let y
                        if(x - step < 0)
                        {
                            let temp = x - step
                            y = alfabhet_uppercase.length - (temp * (-1))
                        }
                        else
                        {
                            y = x - step
                        }
                        decrypted_text.push(alfabhet_uppercase[y])
                    }
                }
                for(j = 0; j < alfabhet_lowercase.length; j++)
                {
                    if(encrypted_text_marks[i] == alfabhet_lowercase[j])
                    {
                        let x = alfabhet_lowercase.indexOf(encrypted_text_marks[i])
                        let z
                        if(x - step < 0)
                        {
                            let temp = x - step
                            z = alfabhet_lowercase.length - (temp * (-1))
                        }
                        else
                        {
                            z = x - step
                        }
                        decrypted_text.push(alfabhet_lowercase[z])
                    }
                }
            }
        }
        let output = document.createElement('p')
        output.textContent = decrypted_text.join("")
        output_place.appendChild(output)
    }
})
