const exams = document.querySelectorAll('.exam')

exams.forEach(exam => {
    exam.addEventListener('click', _ => {
        fetch('http://localhost:8080/exams', {
            method: 'POST',
            body: JSON.stringify({
                test: exam.getAttribute('data-test')
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    })
})
