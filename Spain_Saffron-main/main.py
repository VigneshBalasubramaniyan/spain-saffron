from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Review(BaseModel):
    name: str
    review: str

class UserData(BaseModel):
    timestamp: datetime.datetime
    age_group: str
    gender: str
    page: str

reviews = []
user_data = []

@app.post("/reviews")
def add_review(review: Review):
    reviews.append(review)
    return {"message": "Review added successfully"}

@app.post("/log")
def log_user_data(data: UserData):
    user_data.append(data)
    return {"message": "User data logged successfully"}

@app.get("/")
def read_root():
    return {
        "message": "Welcome to our Saffron's Usages chatbot!",
        "options": ["1. Medicinal", "2. Beauty & Skincare"]
    }

@app.get("/medicinal")
def get_medicinal_options():
    return {
        "options": ["1. Cardiovascular Health", "2. Weight Management"]
    }

@app.get("/beauty")
def get_beauty_options():
    return {
        "options": [
            "1. Acne and Blemishes",
            "2. Redness and Irritation",
            "3. Exfoliation",
            "4. Reduction of Under-Eye Bags"
        ]
    }

@app.get("/beauty/acne")
def get_saffron_spot_treatment():
    return {
        "title": "Saffron Spot Treatment",
        "ingredients": ["Aloe vera gel (1 tablespoon)", "Spanish saffron (a pinch, about 4-5 Strands)"],
        "preparation": [
            "Prepare the saffron: Crush a small pinch of Spanish saffron using a mortar and pestle until it becomes a fine powder. You can also crush it between your fingers if using a small amount.",
            "Mix the ingredients: In a clean bowl, mix the crushed saffron with aloe vera gel until they are well combined. Aloe vera gel is soothing and helps carry the saffron's antibacterial properties to the affected areas."
        ],
        "application": [
            "Cleanse your skin: Wash your face with a gentle cleanser suitable for acne-prone skin. Pat your skin dry with a clean towel.",
            "Apply the treatment: Using a clean fingertip or cotton swab, apply a small amount of the saffron-infused aloe vera gel directly onto acne spots or blemishes. Ensure you cover each blemish evenly.",
            "Leave on: Leave the spot treatment on for 20-30 minutes to allow the saffron's antibacterial and anti-inflammatory properties to work effectively against acne-causing bacteria and reduce inflammation.",
            "Rinse off: After the recommended time, rinse off the treatment with lukewarm water. Gently pat your skin dry with a soft towel."
        ],
        "frequency":"Use the saffron spot treatment daily on affected areas until acne or blemishes improve. Adjust frequency based on skin sensitivity and response."
    }

@app.get("/beauty/redness")
def get_saffron_soothing_mask():
    return {
        "title": "Saffron Soothing Mask",
        "ingredients": ["Cucumber juice (2 tablespoons)","Oatmeal (1 tablespoon)", "Spanish saffron (a pinch, about 4-5 Strands)"],
        "preparation": [
            "Prepare the ingredients: Blend fresh cucumber to extract 2 tablespoons of cucumber juice. Ensure the cucumber is thoroughly blended to achieve a smooth consistency.",
            "Crush the saffron: Crush a pinch of Spanish saffron using a mortar and pestle until it becomes a fine powder.",
            "Mix the mask: In a clean bowl, combine the cucumber juice, oatmeal, and crushed saffron until they form a smooth paste. The oatmeal acts as a gentle exfoliant while saffron and cucumber soothe irritated skin."
        ],
        "application": [
            "Cleanse your face: Wash your face with a gentle cleanser to remove impurities. Pat your skin dry with a clean towel.",
            "Apply the mask: Using clean fingertips or a mask applicator brush, apply the saffron soothing mask evenly to your face.Ensure you cover areas prone to redness or irritation.",
            "Leave on: Allow the mask to sit on your skin for 15-20 minutes. During this time, the saffron's anti-inflammatory properties will help calm and hydrate your skin.",
            "Rinse off: After the recommended time, rinse the mask off with lukewarm water.Gently pat your skin dry with a soft towel."
        ],
        "frequency":"Use the saffron soothing mask once or twice a week to reduce redness and inflammation, adjusting based on your skin's needs."
    }

@app.get("/beauty/exfo")
def get_saffron_body_scrub():
    return {
        "title": "Saffron Body Scrub",
        "ingredients": ["Fine sea salt or sugar (1 cup)","Coconut oil (1/2 cup)", "Spanish saffron (a pinch, about 4-5 Strands)","Essential oil (optional, for fragrance"],
        "preparation": [
            "Prepare the saffron: Crush a pinch of Spanish saffron using a mortar and pestle until it becomes a fine powder.",
            "Mix the ingredients: In a clean bowl, combine the fine sea salt or sugar with melted coconut oil.Add the crushed saffron powder and a few drops of your preferred essential oil for fragrance, if desired.Mix well to ensure even distribution."
        ],
        "application": [
            "Shower preparation: Before applying the saffron body scrub, wet your skin thoroughly in the shower to soften it.",
            "Apply the scrub: Scoop out a generous amount of the saffron body scrub and apply it to damp skin.Massage the scrub over your body using circular motions, focusing on rough or dry areas.",
            "Exfoliate: Continue massaging the scrub for 5-10 minutes to exfoliate dead skin cells and stimulate circulation.Rinse off thoroughly with warm water.",
            "Pat dry: Gently pat your skin dry with a towel. Avoid rubbing vigorously to retain the moisturizing benefits of the coconut oil."
        ],
        "frequency":"Use the saffron body scrub 1-2 times a week to promote smooth, radiant skin and enhance overall skin texture."
    }

@app.get("/beauty/reduc")
def get_saffron_under_eye_gel():
    return {
        "title": "Saffron Under-Eye Gel",
        "ingredients": ["Aloe vera gel (2 tablespoons)","Cucumber juice (1 tablespoon)", "Spanish saffron (a pinch, about 4-5 Strands)"],
        "preparation": [
            "Prepare the saffron: Crush a pinch of Spanish saffron using a mortar and pestle until it becomes a fine powder.",
            "Mix the ingredients: In a clean bowl, combine aloe vera gel with fresh cucumber juice. Add the crushed saffron powder to the mixture and stir well until fully blended."
        ],
        "application": [
            "Cleanse the under-eye area: Gently cleanse the skin around your eyes with a mild cleanser suitable for sensitive skin. Pat the area dry with a soft towel.",
            "Apply the gel: Using clean fingertips or a cotton swab, apply a small amount of the saffron under-eye gel to the under-eye area. Be gentle and avoid getting the gel into your eyes.",
            "Massage gently: Use your ring finger to lightly tap and massage the gel into your skin. Start from the inner corner of your eye and move outwards towards the temples.",
            "Allow absorption: Allow the gel to absorb into your skin for a few minutes before applying any additional eye cream or makeup."
        ],
        "frequency": "Use the saffron under-eye gel daily, preferably in the morning and evening, to reduce under-eye bags, dark circles, and puffiness effectively."
    }

@app.get("/medicinal/cardio")
def get_cardiovascular_health():
    return {
        "title": "Cardiovascular Health Benefits of Saffron",
        "description": "Saffron has been shown to lower LDL (bad cholesterol) levels, increase HDL (good cholesterol) levels, and regulate blood pressure. These effects are attributed to its antioxidant and anti-inflammatory properties.",
        "options": [
            {
                "title": "Saffron Rice",
                "ingredients": ["Rice (1 cup)", "Water (2 cups)", "Spanish saffron (a few strands)"],
                "preparation": [
                    "Soak saffron strands in a small amount of warm water to release its color and flavor.",
                    "Add this to the cooking water when preparing rice to infuse it with saffron's beneficial compounds."
                ],
                "consumption": [
                    "Incorporate saffron rice into your meals regularly.",
                    "It not only enhances the flavor of the dish but also provides cardiovascular health benefits."
                ]
            },
            {
                "title": "Saffron Yogurt",
                "ingredients": ["Plain yogurt (1 cup)", "Spanish saffron (a pinch)"],
                "preparation": [
                    "Mix a pinch of saffron strands into plain yogurt and let it sit for a few minutes to allow the flavors to meld."
                ],
                "consumption": [
                    "Eat saffron yogurt as a snack or with meals.",
                    "Regular consumption can help maintain healthy blood pressure levels and support cardiovascular health."
                ]
            }
        ]
    }

@app.get("/medicinal/weight")
def get_weight_management():
    return {
        "title": "Weight Management Benefits of Saffron",
        "description": "Saffron helps suppress appetite and reduce cravings by increasing serotonin levels, which can help manage emotional eating.",
        "usage": {
            "saffron_tea": {
                "title": "Saffron Tea",
                "ingredients": [
                    "Spanish saffron (a pinch)",
                    "honey (optional)"
                ],
                "preparation": "Boil water and add the saffron strands. Let it steep for 10 minutes to allow the flavor and medicinal compounds to infuse into the water.",
                "consumption": "Drink this tea once or twice a day. Adding honey or lemon can enhance the taste and provide additional health benefits."
            }
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
