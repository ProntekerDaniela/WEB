let attemptCount = 0 //Кількість спроб=0
        do {
            var password = prompt(`Ви використали ${attemptCount} спроб`) //Вводити пароль
            attemptCount++ //Кількість спроб --
        } while (attemptCount > 0 && password != '78') //(спроб>0 і пароль!=123)
 
        if (password != '78')
            document.write(" ")
        else
            document.write("Пароль вірний")