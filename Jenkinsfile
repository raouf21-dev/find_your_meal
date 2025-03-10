pipeline {
    agent any 
    stages {
        stage("Run python Command"){
            steps {
                script {
                    echo "TEST...." // Jenkins' built-in echo
                }
                python3 python.py
            }
        }
    }
}
