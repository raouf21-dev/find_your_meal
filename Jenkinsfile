pipeline {
    agent any 
    stages {
        stage("Run python Command"){
            steps {
                script {
                    echo "TEST...." // Jenkins' built-in echo
                }
                sh 'python3 python.py'
            }
        }
    }
}
