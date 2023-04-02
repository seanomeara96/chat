(async function () {
  const dotenv = require("dotenv");
  dotenv.config();
  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const oldContent = `Moroccanoil - Volumising Mousse 250ml

  For Fine to Medium Hair, Full Body. Medium Hold.
  
  Moroccanoil Volumising Mousse features a ‘weightless’, flexible polymer which provides instant volume, maximum lift and a special “memory factor” for hair that holds its shape and styles that last longer. Infused with argan oil, it provides shine, manageability and extra hydration for fuller, more voluminous hair. 
  
  Moroccanoil Volumising Mousse is enriched with added conditioners, which leave hair looking and feeling healthy, silky, shiny and static-free.
  
  Moroccanoil Volumising Mousse benefits:
  - Builds Body
  - Flexible Hold
  - Lift and Movement`;

  const newContent = `Description

  Who’s it For?
  
  Every hair type can look and feel softer, smoother, stronger, and healthier with more shine, body, and manageability.
  
  Introduction
  
  The Olaplex Discovery Kit is a hair care product that is designed for anyone who wants to strengthen and protect their hair, especially those with damaged, chemically treated, or coloured hair.
  
  Set Contains:
  
      Nº.3 Hair Perfector™ (30 mL / 1 fl. oz.): It is a at-home treatment that helps reduce breakage and strengthen hair. It is applied to damp hair, left for 10 minutes, and then rinsed out.
      Nº.4 Bond Maintenance® Shampoo (30 mL / 1 fl. oz.): This shampoo helps to repair and protect hair bonds, reduce frizz and improve hair texture.
      Nº.5 Bond Maintenance® Conditioner (30 mL / 1 fl. oz.): This conditioner works in combination with the Bond Maintenance Shampoo to restore hair's strength and manageability.
      Nº.4C Bond Maintenance® Clarifying Shampoo (20 mL / .68 fl. oz.): This clarifying shampoo helps remove product buildup and impurities while also helping to strengthen and protect hair.
      Nº.8 Bond Intense Moisture Mask (30 mL / 1 fl. oz.): This mask provides deep hydration and nourishment to hair while also helping to repair and strengthen bonds.
      Nº.6 Bond Smoother® (20 mL / .68 fl. oz.): It is a leave-in styling cream that helps to smooth and protect hair, reduce frizz, and add shine.
      Nº.7 Bonding Oil™ (30 mL / 1 fl. oz.): This oil helps to nourish and protect hair while also providing heat protection and reducing frizz.
      Nº.9 Bond Protector Nourishing Hair Serum (20 mL / .68 fl. oz.): This serum is formulated with a blend of vitamins and antioxidants to help protect hair from environmental stressors and keep it healthy and shiny.
  
  How to use:
  
      Nº.3 Hair Perfector™: Apply to damp hair before shampooing. Work a generous amount into the hair and leave on for a minimum of 10 minutes. Rinse out, shampoo and condition as normal.
      Nº.4 Bond Maintenance® Shampoo: Apply to wet hair and massage into a lather. Rinse thoroughly and follow with Nº.5 Bond Maintenance® Conditioner.
      Nº.5 Bond Maintenance® Conditioner: Apply to clean, damp hair and leave on for 3 minutes. Rinse thoroughly.
      Nº.4C Bond Maintenance® Clarifying Shampoo: Apply to wet hair and massage into a lather. Rinse thoroughly and follow with Nº.5 Bond Maintenance® Conditioner.
      Nº.8 Bond Intense Moisture Mask: Apply to clean, damp hair and leave on for a minimum of 10 minutes. Rinse thoroughly and style as desired.
      Nº.6 Bond Smoother®: Apply a small amount to damp or dry hair, focusing on mid-lengths and ends. Style as desired.
      Nº.7 Bonding Oil™: Apply a small amount to damp or dry hair, focusing on mid-lengths and ends. Style as desired.
      Nº.9 Bond Protector Nourishing Hair Serum: Apply a small amount to clean, damp hair before styling. Can also be used on dry hair to smooth and tame flyaways.
  
  More Info
  
      Cruelty Free
      Gluten Free
      Nut Free
      Paraben Free
      PH Balanced
      Phosphate Free
      Phthalate Free
      Vegan
  
  BeautyFeatures Style Guide:
  
      You may also like to try the Olaplex Hair Repair Treatment Kit!
  `;

  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Rewite this old content "${oldContent}" in a structure similar to this new content "${newContent}"`,
    temperature: 0,
    max_tokens: 1000,
  });

  console.log(response.data.choices[0].text);
})();
