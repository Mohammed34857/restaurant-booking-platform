'use client';

import Image from "next/image";
import { MealDetailsModel } from '@/Models/MealsDetailsModel';
import { Button, Card, CardContent, Typography, Chip, Stack, Divider, Box } from '@mui/material';
import { useEffect, useState } from 'react';

interface MealLookupProps {
  mealId?: string;
}

export default function MealLookup({ mealId = '52772' }: MealLookupProps) {
  const [meal, setMeal] = useState<MealDetailsModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [ingredients, setIngredients] = useState<{ ingredient: string; measure: string }[]>([]);

  // Parse ingredients from meal data
  const parseIngredients = (mealData: MealDetailsModel) => {
    const list: { ingredient: string; measure: string }[] = [];
    for (let i = 1; i <= 20; i++) {
      const ing = mealData[`strIngredient${i}` as keyof MealDetailsModel];
      const measure = mealData[`strMeasure${i}` as keyof MealDetailsModel];
      if (ing && ing.trim()) list.push({ ingredient: ing.trim(), measure: measure?.toString() || 'As needed' });
    }
    return list;
  };

  const fetchMeal = async (id: string) => {
    try {
      setLoading(true);
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      if (!res.ok) throw new Error(`Failed to fetch meal: ${res.status}`);
      const data = await res.json();
      if (!data.meals || data.meals.length === 0) throw new Error('Meal not found');
      setMeal(data.meals[0]);
      setIngredients(parseIngredients(data.meals[0]));
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Unknown error');
      setMeal(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (mealId) fetchMeal(mealId);
  }, [mealId]);

  if (loading) return <Typography align="center" mt={10}>Loading meal details...</Typography>;
  if (error) return <Typography align="center" color="error" mt={10}>{error}</Typography>;
  if (!meal) return <Typography align="center" mt={10}>No meal data available</Typography>;

  const tags = meal.strTags ? meal.strTags.split(',').map(t => t.trim()) : [];

  return (
    <div className="max-w-4xl mx-auto text-white py-8">
      <Typography variant="h3" textAlign="center" mb={4}>{meal.strMeal} Details</Typography>

      <Card>
        <Image
          src={meal.strMealThumb}
          width={800}
          height={400}
          alt={meal.strMeal}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />

        <CardContent>
          <Typography variant="h4" mb={2}>{meal.strMeal}</Typography>

          <Stack direction="row" spacing={2} mb={2}>
            <Chip label={meal.strCategory} color="primary" />
            <Chip label={meal.strArea} color="secondary" />
            {meal.strYoutube && (
              <Chip label="Watch Video" color="error" clickable onClick={() => window.open(meal.strYoutube!, '_blank')} />
            )}
          </Stack>

          {tags.length > 0 && (
            <Stack direction="row" spacing={1} flexWrap="wrap" mb={3}>
              {tags.map((tag, i) => <Chip key={i} label={tag} size="small" />)}
            </Stack>
          )}

          <Divider className="my-3" />
          <Typography variant="h5" mb={2}>Ingredients</Typography>
          <Stack spacing={1} mb={3}>
            {ingredients.map((item, i) => (
              <Box key={i} display="flex" justifyContent="space-between">
                <Typography>{item.ingredient}</Typography>
                <Typography color="text.secondary">{item.measure}</Typography>
              </Box>
            ))}
          </Stack>

          <Divider className="my-3" />
          <Typography variant="h5" mb={2}>Instructions</Typography>
          <Box className="bg-gray-50 text-black p-4 rounded">
            {meal.strInstructions.split('\r\n').map((p, i) => p.trim() && <Typography key={i} mb={2}>{p}</Typography>)}
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
