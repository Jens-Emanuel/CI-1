pipeline {
    agent any

    tools {nodejs "node19"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        
        }
        stage('e2e Tests') {
            steps {
                bat 'npm run cypress:ci'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}