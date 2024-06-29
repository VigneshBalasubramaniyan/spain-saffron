import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function RednessSoothingMask() {
    const [gelInfo, setGelInfo] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/beauty/redness') // Adjust URL as per your backend setup
            .then(response => {
                setGelInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching gel info:', error);
            });
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>{gelInfo.title}</Typography>
            <Typography variant="body1" gutterBottom>
                Ingredients:
            </Typography>
            <List>
                {gelInfo.ingredients && gelInfo.ingredients.map((ingredient, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={ingredient} />
                    </ListItem>
                ))}
            </List>
            <Typography variant="body1" gutterBottom>
                Preparation:
            </Typography>
            <List>
                {gelInfo.preparation && gelInfo.preparation.map((step, index) => (
                    <ListItem key={index}>
                        {index + 1}. {step}
                    </ListItem>
                ))}
            </List>
            <Typography variant="body1" gutterBottom>
                Application:
            </Typography>
            <List>
                {gelInfo.application && gelInfo.application.map((step, index) => (
                    <ListItem key={index}>
                        {index + 1}. {step}
                    </ListItem>
                ))}
            </List>
            <Typography variant="body1" gutterBottom>
                Frequency: {gelInfo.frequency}
            </Typography>
        </Box>
    );
}

export default RednessSoothingMask;
