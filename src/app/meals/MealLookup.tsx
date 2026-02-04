'use client';

import { MealDetailsModel } from '@/Models/MealsDetailsModel';
import { Card, CardContent, CardMedia, Typography, Chip, Stack, Divider, Box } from '@mui/material';
import { useEffect, useState } from 'react';

// Define the meal model based on the API response structure


interface MealApiResponse {
  meals: MealDetailsModel[] | null;
}

interface MealLookupProps {
  mealId?: string; // Optional prop for custom meal ID
}

function MealLookupComponent({ mealId = '52772' }: MealLookupProps) {
  const [meal, setMeal] = useState<MealDetailsModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [customId, setCustomId] = useState(mealId);
  const [ingredients, setIngredients] = useState<Array<{ ingredient: string; measure: string }>>([]);

  // Function to parse ingredients from the meal data
  const parseIngredients = (mealData: MealDetailsModel) => {
    const ingredientsList: Array<{ ingredient: string; measure: string }> = [];
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}` as keyof MealDetailsModel];
      const measure = mealData[`strMeasure${i}` as keyof MealDetailsModel];
      
      if (ingredient && ingredient.trim() !== '') {
        ingredientsList.push({
          ingredient: ingredient.trim(),
          measure: measure ? measure.trim() : 'As needed'
        });
      }
    }
    
    return ingredientsList;
  };

  const getMealDetails = async (id: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch meal: ${response.status}`);
      }
      
      const data: MealApiResponse = await response.json();
      
      if (!data.meals || data.meals.length === 0) {
        throw new Error('Meal not found. Please check the ID.');
      }
      
      const mealData = data.meals[0];
      setMeal(mealData);
      setIngredients(parseIngredients(mealData));
      
    } catch (err) {
      console.error('Error fetching meal details:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setMeal(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (customId.trim()) {
      getMealDetails(customId);
    }
  };

  useEffect(() => {
    getMealDetails(mealId);
  }, [mealId]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <Typography variant="h6">Loading meal details...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center flex-col items-center h-full mt-11">
        <Typography variant="h5" color="error" className="mb-4">
          Error Loading Meal
        </Typography>
        <Typography variant="body1" className="mb-6">
          {error}
        </Typography>
          
        
       
        
      </div>
    );
  }

  if (!meal) {
    return (
      <div className="w-full flex justify-center items-center h-64">
        <Typography variant="h6">No meal data available</Typography>
      </div>
    );
  }

  // Parse tags if available
  const tags = meal.strTags ? meal.strTags.split(',').map(tag => tag.trim()) : [];

  return (
    <div className="w-full flex rounded-sm  mt-25 text-white justify-center flex-col items-center h-full  bg-gray-900 text-black outline outline-solid border-r-2 ">
      <Typography variant="h3" component="h1" className="text-center font-bold  my-50  ">
          {meal.strMeal}   Details
      </Typography>

     

      {/* Main Meal Card */}
      <Card className="w-full border-solid shadow p-1 outline outline-solid 


 max-w-4xl mb-8 mt-8 " >
        <CardMedia
          component="img"
          height="400"
          image={meal.strMealThumb}
          alt={meal.strMeal}
          className="object-cover shadow p-1 "
        />
        
        <CardContent>
          {/* Meal Title and Basic Info */}
          <Typography variant="h4" component="div" className="mb-4">
            {meal.strMeal}
          </Typography>
          
          <Stack direction="row" spacing={2} className="mb-4">
            <Chip 
             
              label={meal.strCategory} 
              color="primary" 
              variant="outlined" 
            />
            <Chip 
              label={meal.strArea} 
              color="secondary" 
              variant="outlined" 
            />
            {meal.strYoutube && (
              <Chip 
                label="Watch Video" 
                color="error"
                clickable
                onClick={() => window.open(meal.strYoutube!, '_blank')}
              />
            )}
          </Stack>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mb-6">
              <Typography variant="subtitle1" className="mb-2">
                Tags:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {tags.map((tag, index) => (
                  <Chip key={index} label={tag} size="small" />
                ))}
              </Stack>
            </div>
          )}

          <Divider className="my-6" />

          {/* Ingredients Section */}
          <Typography variant="h5" className="mb-4">
            Ingredients
          </Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {ingredients.map((item, index) => (
              <Card key={index} variant="outlined" className="p-3">
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="body1">
                    {item.ingredient}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.measure}
                  </Typography>
                </Stack>
              </Card>
            ))}
          </div>

          <Divider className="my-6" />

          {/* Instructions Section */}
          <Typography variant="h5" className="mb-4">
            Instructions
          </Typography>
          
          <Box className="bg-gray-50 p-4 rounded-lg">
            {meal.strInstructions.split('\r\n').map((paragraph, index) => (
              paragraph.trim() && (
                <Typography 
                  key={index} 
                  variant="body1" 
                  className="mb-4"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {paragraph}
                </Typography>
              )
            ))}
          </Box>

          {/* Additional Info */}
          <Divider className="my-6" />
          
          <Stack direction="row" spacing={4} className="text-gray-600">
            <Box display="flex" alignItems="center">
              <Typography variant="body2">
                Prep & Cook: ~60 mins
              </Typography>
            </Box>
           
          </Stack>
        </CardContent>
      </Card>

      {/* Source Link if available */}
      {meal.strSource && (
        <Card className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white mb-8">
          <Typography variant="body2">
            Source: {' '}
            <a 
              href={meal.strSource} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {meal.strSource}
            </a>
          </Typography>
        </Card>
      )}
    </div>
  );
}

export default MealLookupComponent;