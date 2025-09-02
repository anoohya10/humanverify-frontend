cd backend
cd venv
.\venv\Scripts\Activate
python app.py
cd .. to go back in the file
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Render provides PORT env variable
    app.run(host="0.0.0.0", port=port, debug=False)
    main in deploying with render 