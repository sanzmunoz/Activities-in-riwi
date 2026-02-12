### Control de versiones con Git

usuario: git config --global user.name ""
correo: git config --global user.email ""
verificacion: git config user.name

- Crear otra rama : $ git branch develop
- Subo la rama a github: $ git push origin develop
- Pararme en la rama creada: $ git checkout develop
- En la barra inferior debe cambiarse y aparecer la rama sobre la que estoy

$ git pull origin develop

- Para crear nueva rama ya posicionado en develop: $git branch feature/edit-users
- Para irme a esa rama: $ git checkout feature/edit-users
- Para subir esa nueva rama: $ git push origin feature/edit-users

Para agregar en github colaboradores se ingresa a settings y en la izquierda hay pestaña de colaboradores, alli se puede agregar el perfil de la persona asociado

Si quiero eliminar esa rama sobre la que trabaje $git branch -D feature/edit-users
o dentro del gitHub

Con $ git log se muestra los cambios

con $ git lg se ven mas organizados los commits pero primero se debe actualizar ese comando especial con este comando: git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"

git config --global alias.s status --short