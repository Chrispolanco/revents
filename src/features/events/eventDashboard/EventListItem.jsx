import React from "react";
import { Button, Icon, IconGroup, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

const EventListItem = () => {
    return(
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src='/assets/user.png' /> 
                        <Item.Content>
                            <Item.Header content='Event Title' /> 
                            <Item.Description>
                                Hosted By Chris 
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock'/> Date 
                    <IconGroup name='marker'/>Venue 
                </span>
            </Segment>
            <Segment>
                <List horizontal>
                    <EventListAttendee /> 
                    <EventListAttendee /> 
                    <EventListAttendee /> 
                </List>
            </Segment>
            <Segment clearing>
                <div> Description of Event </div>
                <Button color="teal" floated="right" content="View" /> 
            </Segment>
        </Segment.Group>
    )
}; 

export default EventListItem; 