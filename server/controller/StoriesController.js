export const saveStory = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    const newStory = {
        id: Date.now(),  // Generate a simple unique ID (use UUID in a real app)
        title: req.body.title || 'Untitled',
        description: req.body.description || 'No description',
        filename: req.file.filename,
        path: req.file.path,
        size: req.file.size,
    };

    res.json({
        message: 'Upload successful!',
        story: newStory,
    });
};

export const getStories = (res, req) => {

};