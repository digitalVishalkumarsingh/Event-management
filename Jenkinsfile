pipeline {
  agent any
  
  tools {
    sonarScanner 'sonar-scanner'
  }


  environment {
    DOCKERHUB_CRED = credentials('Dockerhubcred')
  }

  stages {

    stage('Git Clone') {
      steps {
        git url: 'https://github.com/Shivam6388469930/Event-Management.git', branch: 'main'
      }
    }

    stage('NPM Install') {
      steps {
        sh 'cd Backend && npm install'
        sh 'cd event_management && npm install'
      }
    }

    stage('SonarQube Code Scan') {
      steps {
        withSonarQubeEnv('sonarqube-server') {
          sh 'sonar-scanner'
        }
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t shivam6388/nodes-backend:latest Backend'
        sh 'docker build -t shivam6388/nodes-event_management:latest event_management'
      }
    }

    stage('Docker Hub Push') {
      steps {
        sh '''
          echo $DOCKERHUB_CRED_PSW | docker login \
          -u $DOCKERHUB_CRED_USR --password-stdin

          docker push shivam6388/nodes-backend:latest
          docker push shivam6388/nodes-event_management:latest
        '''
      }
    }
  }
}
