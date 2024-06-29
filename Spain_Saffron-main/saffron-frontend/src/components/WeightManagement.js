import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function WeightManagement() {
    const [weightInfo, setWeightInfo] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/medicinal/weight') // Adjust URL as per your backend setup
            .then(response => {
                setWeightInfo(response.data);
            })
            .catch(error => {
                console.error('Error fetching weight management info:', error);
            });
    }, []);

    return (
        <Box>
            <Typography variant="h4" gutterBottom>{weightInfo.title}</Typography>
            <Typography variant="body1" gutterBottom>
                Description: {weightInfo.description}
            </Typography>
            <List>
                {weightInfo.usage && Object.keys(weightInfo.usage).map((key, index) => {
                    const method = weightInfo.usage[key];
                    return (
                        <Box key={index} mt={2}>
                            <Typography variant="h6" gutterBottom>{method.title}</Typography>
                            <Typography variant="body1" gutterBottom>
                                Ingredients:
                            </Typography>
                            <List>
                                {method.ingredients && method.ingredients.map((ingredient, idx) => (
                                    <ListItem key={idx}>
                                        <ListItemText primary={ingredient} />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="body1" gutterBottom>
                                Preparation: {method.preparation}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Consumption: {method.consumption}
                            </Typography>
                        </Box>
                    );
                })}
            </List>
        </Box>
    );
}

export default WeightManagement;
