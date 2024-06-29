import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function Cardiovascular() {
    const [healthInfo, setHealthInfo] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/medicinal/cardio') // Adjust URL as per your backend setup
            .then(response => {
                setHealthInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching health info:', error);
            });
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>{healthInfo.title}</Typography>
            <Typography variant="body1" gutterBottom>
                Description: {healthInfo.description}
            </Typography>
            {healthInfo.options && healthInfo.options.map((option, index) => (
                <Box key={index} mt={2}>
                    <Typography variant="h5" gutterBottom>{index + 1}. {option.title}</Typography>
                    <Typography variant="body1" gutterBottom>
                        Ingredients:
                    </Typography>
                    <List>
                        {option.ingredients && option.ingredients.map((ingredient, i) => (
                            <ListItem key={i}>
                                <ListItemText primary={ingredient} />
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="body1" gutterBottom>
                        Preparation:
                    </Typography>
                    <List>
                        {option.preparation && option.preparation.map((step, i) => (
                            <ListItem key={i}>
                                {i + 1}. {step}
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="body1" gutterBottom>
                        Consumption:
                    </Typography>
                    <List>
                        {option.consumption && option.consumption.map((step, i) => (
                            <ListItem key={i}>
                                {i + 1}. {step}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            ))}
        </Box>
    );
}

export default Cardiovascular;
