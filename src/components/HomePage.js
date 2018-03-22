import React from 'react';
import { Grid, Header, Segment, Container, Button } from 'semantic-ui-react';
import SignupForm from './SignupForm'

export default () => (
  <div>
    <Segment inverted vertical textAlign='center'>
      <Container>
        <Grid columns={2} stackable>
          <Grid.Row>
            <Grid.Column>
              <Header 
                inverted
                content='Some heading' 
                size='huge'
                style={{
                  fontSize: '3em',
                  marginTop: '3em'
                }} />
              
              <Header 
                inverted
                as='h3'
                content='some subheader text goes here' />

              <Button 
                color='green'
                size='huge'>
                  How it works
              </Button>
            </Grid.Column>
            
            {/* 2nd column */}
            <Grid.Column 
               style={{
                padding: '2em 0 5em 0',
                }}>
              <SignupForm />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </div>
);