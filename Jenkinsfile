pipeline {
    agent any 
    stages {
        stage("Run Shell Command"){
            steps {
                script {
                    echo "TEST..." // Jenkins' built-in echo
                }
                sh 'echo "Hello Jenkins!"'
            }
        }
    }
}