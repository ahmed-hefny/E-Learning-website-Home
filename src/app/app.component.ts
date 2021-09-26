import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public courses = [
    {
      img: '../assets/images/ualberta.png',
      description: 'User Research for User Experience Design',
      link_description: 'The Museum of Modern Art'
    },
    {
      img: '../assets/images/w.png',
      description: 'Buddhism and Modern Psychology',
      link_description: 'The Museum of Modern Art'
    },
    {
      img: '../assets/images/cal.png',
      description: 'Introduction to Philosophy',
      link_description: 'Duke University'
    },
    {
      img: '../assets/images/ualberta5.png',
      description: 'Advance on Seeing Through Photographs',
      link_description: 'The Museum of Modern Art'
    },
    {
      img: '../assets/images/calarts.png',
      description: 'Advance on Seeing Through Photographs',
      link_description: 'Duke University'
    },
    {
      img: '../assets/images/ual2.png',
      description: 'Modern and Contemporary Art and Design',
      link_description: 'The Museum of Modern Art'
    },
    {
      img: '../assets/images/ualberta3.png',
      description: 'Think Again I: How to Understand Arguments',
      link_description: 'The Museum of Modern Art'
    },
    {
      img: '../assets/images/w2.png',
      description: 'Introduction to Logic and Critical Thinking',
      link_description: 'Duke University'
    },
    {
      img: '../assets/images/calarts2.png',
      description: 'User Research for User Experience Design',
      link_description: 'The Museum of Modern Art'
    },

  ]
  public numbers = [
    {
      img: '../assets/images/published-courses.png',
      desc:'COURSES PUBLISHED',
      counter:'768'
    },
    {
      img: '../assets/images/instructors.png',
      desc:'EXPERT INSTRUCTORS ',
      counter:'120'
    },
    {
      img: '../assets/images/learner.png',
      desc:'HAPPY LEARNERS',
      counter:'8,300'
    },
    {
      img: '../assets/images/awards.png',
      desc:'AWARDS ACHIEVED',
      counter:'32'
    },
    
  ]
  title = 'seamlabs-task';
}
