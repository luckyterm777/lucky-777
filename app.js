<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LUCKY 777 // The Alchemical Sanctum</title>
    <style>
        :root {
            --bg-void: #010103;
            --bg-obsidian: #07070d;
            --bg-card: #0c0c14;
            --gold: #f3e5ab;
            --gold-bright: #fff6d4;
            --gold-dim: rgba(243, 229, 171, 0.2);
            --cyan: #00f0ff;
            --crimson: #ff2a5f;
            --text-main: #c8c8d4;
            --text-dim: #777788;
            --border-ancient: #2d2415;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Courier New', Courier, monospace;
            user-select: none;
            -webkit-user-select: none;
        }

        body {
            background-color: var(--bg-void);
            color: var(--text-main);
            min-height: 100vh;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            position: relative;
        }

        /* Deep Dystopian Smoky Vignette & Mist */
        body::before {
            content: " ";
            display: block;
            position: fixed;
            top: 0; left: 0; bottom: 0; right: 0;
            background: 
                radial-gradient(circle at 50% 25%, rgba(15, 12, 5, 0.85) 0%, rgba(1, 1, 3, 0.98) 75%),
                linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6) 50%),
                linear-gradient(90deg, rgba(255, 42, 95, 0.015), rgba(0, 240, 255, 0.015));
            z-index: 1;
            background-size: 100% 100%, 100% 4px, 8px 100%;
            pointer-events: none;
        }

        header, main {
            position: relative;
            z-index: 5;
        }

        header {
            width: 100%;
            padding: 18px 10px;
            text-align: center;
            border-bottom: 1px solid var(--border-ancient);
            background: linear-gradient(180deg, #0d0d14 0%, #050508 100%);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.95);
        }

        h1 {
            color: var(--gold);
            font-size: clamp(1.1rem, 4vw, 1.5rem);
            letter-spacing: 4px;
            text-shadow: 0 0 20px rgba(243, 229, 171, 0.6);
            text-transform: uppercase;
        }

        .subtitle {
            font-size: 0.65rem;
            color: var(--crimson);
            letter-spacing: 3px;
            margin-top: 4px;
            text-transform: uppercase;
            text-shadow: 0 0 10px rgba(255, 42, 95, 0.4);
        }

        main {
            width: 100%;
            max-width: 1200px;
            padding: 20px 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            flex: 1;
        }

        .screen {
            display: none;
            width: 100%;
            animation: fadeIn 0.5s ease forwards;
        }

        .screen.active {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .sanctum-gate {
            text-align: center;
            padding: 35px 25px;
            border: 1px solid var(--border-ancient);
            background: linear-gradient(145deg, rgba(12, 12, 20, 0.95) 0%, rgba(4, 4, 8, 0.98) 100%);
            box-shadow: 0 0 40px rgba(0, 0, 0, 0.95);
            width: 100%;
            max-width: 850px;
            margin-top: 15px;
        }

        .sanctum-title-tag {
            color: var(--crimson);
            font-size: 0.6rem;
            letter-spacing: 2px;
            margin-bottom: 15px;
            border: 1px solid rgba(255, 42, 95, 0.3);
            display: inline-block;
            padding: 4px 10px;
        }

        .sanctum-gate p {
            color: var(--text-main);
            font-size: 0.85rem;
            line-height: 1.7;
            margin-bottom: 25px;
        }

        .guild-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
            width: 100%;
            margin-bottom: 25px;
        }

        .guild-card {
            background: var(--bg-card);
            border: 1px solid var(--border-ancient);
            padding: 22px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            position: relative;
            z-index: 