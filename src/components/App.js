import React, {Component} from "react";
import Section from './Section/Section';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Notification from './Notification/Notification';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }

    leaveFeedback = option => (this.setState(prevState => ({[option]: prevState[option] + 1})))

    countTotalFeedback = () => {
        return Object.values(this.state).reduce(
          ( acc, currentValue ) => acc + currentValue,
          0
        );
      }  

      countPositiveFeedbackPercentage = (good, total) => {
        return Math.trunc(good*100/total)
      }
      
    render() {
      const {good, neutral, bad} = this.state
      const total = this.countTotalFeedback()
      const posPers = this.countPositiveFeedbackPercentage(good, total)
      const options = Object.keys(this.state)

      return(<>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.leaveFeedback}/>
      </Section>
      <Section title="Statistics">
        { total > 0
        ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={posPers} />
        : <Notification message="No feedback given" />
        }        
      </Section>
      </>)      
    }
}