---
title: "The Sims 4: Complete Cheats Guide - Money, Skills, and More"
author: "Nafiz Mazlan"
date: "2026-03-10"
category: "tips-tricks"
platform: "PC, PS5, PS4, Xbox"
image: "/images/tips-tricks/sims-4.png"
excerpt: "Master The Sims 4 with our complete cheats guide including motherlode, skill cheats, build mode, and more."
type: "original"
---

## How to Enable Cheats in The Sims 4

Before using any cheats, you need to enable the cheat console:

**PC:** Press `Ctrl + Shift + C`  
**Mac:** Press `Command + Shift + C`  
**PlayStation:** Press all four triggers (L1 + L2 + R1 + R2)  
**Xbox:** Press all four triggers (LB + LT + RB + RT)

A white text box will appear at the top of your screen. Type `testingcheats true` and press Enter to enable cheats.

---

## Money Cheats 💰

### Motherlode - The Classic

The most famous Sims cheat! Instantly adds §50,000 to your household funds.

**How to use:**
1. Open cheat console
2. Type: `motherlode`
3. Press Enter
4. Repeat as many times as needed!

### Other Money Cheats

**Kaching** - Adds §1,000  
```
kaching
```

**Rosebud** - Also adds §1,000 (classic cheat from original Sims)  
```
rosebud
```

**Money [amount]** - Set exact amount of money  
```
money 1000000
```
Example: `money 9999999` gives you nearly 10 million simoleons!

---

## Skill Cheats 🎯

Max out any skill instantly or set it to a specific level.

### Skill Cheat Format
```
stats.set_skill_level [skill_type] [level]
```

Level ranges from 1-10 for most skills.

### Major Skills

**Cooking:**
```
stats.set_skill_level Major_HomestyleCooking 10
```

**Fitness:**
```
stats.set_skill_level Major_Fitness 10
```

**Charisma:**
```
stats.set_skill_level Major_Charisma 10
```

**Comedy:**
```
stats.set_skill_level Major_Comedy 10
```

**Gardening:**
```
stats.set_skill_level Major_Gardening 10
```

**Guitar:**
```
stats.set_skill_level Major_Guitar 10
```

**Painting:**
```
stats.set_skill_level Major_Painting 10
```

**Piano:**
```
stats.set_skill_level Major_Piano 10
```

**Programming:**
```
stats.set_skill_level Major_Programming 10
```

**Rocket Science:**
```
stats.set_skill_level Major_RocketScience 10
```

**Video Gaming:**
```
stats.set_skill_level Major_VideoGaming 10
```

**Violin:**
```
stats.set_skill_level Major_Violin 10
```

**Writing:**
```
stats.set_skill_level Major_Writing 10
```

### Minor Skills

**Baking:**
```
stats.set_skill_level Minor_Baking 5
```

**Dancing:**
```
stats.set_skill_level Minor_Dancing 5
```

**Photography:**
```
stats.set_skill_level Minor_Photography 5
```

---

## Build Mode Cheats 🏗️

### Free Real Estate

Make any lot free to move into:
```
freerealestate on
```

Turn it off:
```
freerealestate off
```

### Unlock All Items

Access all build/buy mode items regardless of career unlocks:
```
bb.ignoregameplayunlocksentitlement
```

### Move Objects Anywhere

Place objects anywhere, even overlapping:
```
bb.moveobjects on
```

This is essential for advanced building!

### Show Hidden Objects

Reveal debug items and hidden objects:
```
bb.showhiddenobjects
```

### Show Live Edit Objects

Access special build mode items:
```
bb.showliveeditobjects
```

---

## Needs Cheats 😊

### Fill All Needs

Make your Sim completely happy:
```
fillmotive motive_hunger
fillmotive motive_energy
fillmotive motive_bladder
fillmotive motive_hygiene
fillmotive motive_social
fillmotive motive_fun
```

Or use this shortcut to fill ALL needs at once:
```
sims.fill_all_commodities
```

### Disable Need Decay

Make needs never decrease (must enable testingcheats first):
1. Shift + Click on your Sim
2. Select "Disable Need Decay"

---

## Career Cheats 💼

### Promote Your Sim

Get an instant promotion:
```
careers.promote [career_name]
```

**Example careers:**
- `careers.promote adult_active_astronaut`
- `careers.promote adult_culinary_chef`
- `careers.promote adult_criminal`
- `careers.promote adult_painter`
- `careers.promote adult_writer`

### Add to Career

Join any career instantly:
```
careers.add_career [career_name]
```

---

## Relationship Cheats 💕

### Modify Relationships

Change relationship levels with any Sim:

**Make friends instantly:**
```
modifyrelationship [YourSimFirstName] [YourSimLastName] [TargetSimFirstName] [TargetSimLastName] 100 LTR_Friendship_Main
```

**Make romance:**
```
modifyrelationship [YourSimFirstName] [YourSimLastName] [TargetSimFirstName] [TargetSimLastName] 100 LTR_Romance_Main
```

**Example:**
```
modifyrelationship Bella Goth Mortimer Goth 100 LTR_Romance_Main
```

---

## Life Stage Cheats 👶👴

### Age Up/Down

**Age up your Sim:**
- Shift + Click on Sim (with testingcheats true)
- Select "Modify in CAS"
- Change age

Or use this cheat to trigger a birthday:
```
cas.fulleditmode
```
Then Shift + Click Sim → Modify in CAS

---

## Death & Ghost Cheats 💀

### Prevent Death

When Grim Reaper appears:
1. Pause the game
2. Type: `death.toggle false`
3. Your Sim won't die!

Re-enable death:
```
death.toggle true
```

### Resurrect a Sim

Bring a ghost back to life:
1. Add ghost to household
2. Use `cas.fulleditmode`
3. Shift + Click ghost → Modify in CAS
4. Remove ghost trait

---

## Bonus Cheats 🎁

### Satisfaction Points

Get free reward points for traits:
```
sims.give_satisfaction_points 50000
```

### Reset a Stuck Sim

If your Sim gets stuck:
```
resetSim [FirstName] [LastName]
```

Example: `resetSim Bella Goth`

### Teleport Anywhere

Shift + Click on ground → "Teleport Here" (testingcheats must be enabled)

---

## Expansion Pack Specific Cheats

### Get to Work - Alien Powers

Become an alien:
1. `cas.fulleditmode`
2. Modify in CAS
3. Change to Alien

### Seasons - Control Weather
```
weather.start_weather_event [type]
```

Types: sunny, rainy, stormy, snow

### Vampires - Instant Vampire

Add vampire trait:
```
traits.equip_trait trait_OccultVampire
```

---

## Important Tips ⚠️

### Achievements & Cheats

**WARNING:** Using cheats disables achievements/trophies for that save file!

If you care about achievements, create a separate save file for cheating.

### Testingcheats Required

Many cheats require `testingcheats true` to be enabled first. If a cheat isn't working, make sure you've enabled this!

### Save Your Game

Always save before using cheats, especially experimental ones. Some cheats can cause unexpected behavior.

### Case Sensitivity

Cheats are NOT case-sensitive, but Sim names ARE! 

✅ `motherlode` = `MOTHERLODE` = `MoThErLoDe`  
❌ `Bella Goth` ≠ `bella goth`

---

## Quick Reference Table

| Cheat | Effect |
|-------|--------|
| `motherlode` | +§50,000 |
| `kaching` | +§1,000 |
| `bb.moveobjects on` | Place objects anywhere |
| `testingcheats true` | Enable testing cheats |
| `cas.fulleditmode` | Full CAS editing |
| `freerealestate on` | Free houses |
| `sims.fill_all_commodities` | Fill all needs |

---

## Conclusion

With these cheats, you can build your dream house, create your perfect Sim, and play The Sims 4 exactly how you want!

Remember: cheating is a single-player game choice. Play however makes you happy! Whether you use motherlode to build a mansion or grind your way up from a tiny starter home, The Sims 4 is your story.

**Happy Simming!** 🏡✨