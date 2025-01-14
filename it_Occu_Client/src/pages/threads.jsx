import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

function Threads() {
    const [threads, setThreads] = useState([]);
    const [comments, setComments] = useState([]);
    const [newThread, setNewThread] = useState({ title: '', content: '' });
    const [newComment, setNewComment] = useState({ thread_id: '', user_name: '', comment: '' });

    // Fetch threads
    useEffect(() => {
        axios.get('https://itoccupa-production.up.railway.app/api/threads')
            .then(response => setThreads(response.data))
            .catch(error => console.error('Error fetching threads:', error));
    }, []);

    // Fetch comments when a thread is selected
    const fetchComments = (thread_id) => {
        axios.get(`https://itoccupa-production.up.railway.app/api/comments/${thread_id}`)
            .then(response => setComments(response.data))
            .catch(error => console.error('Error fetching comments:', error));
    };

    // Submit a new thread
    const handleSubmitThread = (e) => {
        e.preventDefault();
        axios.post('https://itoccupa-production.up.railway.app/api/threads', newThread)
            .then(response => {
                setThreads([...threads, newThread]);
                setNewThread({ title: '', content: '' });
            })
            .catch(error => console.error('Error posting thread:', error));
    };

    // Submit a new comment
    const handleSubmitComment = (e) => {
        e.preventDefault();
        axios.post('https://itoccupa-production.up.railway.app/api/comments', newComment)
            .then(response => {
                fetchComments(newComment.thread_id);
                setNewComment({ thread_id: '', user_name: '', comment: '' });
            })
            .catch(error => console.error('Error posting comment:', error));
    };

    return (
        <>
            <Navbar />
            <div className="max-w-2xl sm:container pt-40 border border-solid w-96 h-auto justify-items-center mx-auto p-6 rounded-lg shadow-md bg-white">
                <h1 className="text-center text-3xl font-bold pt-4">กระทู้</h1>

                {/* Create Thread Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">สร้างกระทู้ใหม่</h2>
                    <form onSubmit={handleSubmitThread} className="space-y-4">
                        <input
                            type="text"
                            placeholder="หัวข้อกระทู้"
                            value={newThread.title}
                            onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="เนื้อหากระทู้"
                            value={newThread.content}
                            onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            สร้างกระทู้
                        </button>
                    </form>
                </div>

                {/* Threads Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">รายการกระทู้</h2>
                    {threads.map((thread) => (
                        <div
                            key={thread.id}
                            className="bg-gray-100 p-4 mb-4 rounded-lg shadow-sm hover:bg-gray-200 transition-all"
                        >
                            <h3
                                onClick={() => fetchComments(thread.id)}
                                className="text-blue-600 cursor-pointer text-lg font-semibold"
                            >
                                {thread.title}
                            </h3>
                            <p className="text-gray-700">{thread.content}</p>
                        </div>
                    ))}
                </div>

                {/* Comments Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">ความคิดเห็น</h2>
                    <form onSubmit={handleSubmitComment} className="space-y-4">
                        <input
                            type="text"
                            placeholder="ชื่อผู้แสดงความคิดเห็น"
                            value={newComment.user_name}
                            onChange={(e) => setNewComment({ ...newComment, user_name: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <textarea
                            placeholder="เขียนความคิดเห็น"
                            value={newComment.comment}
                            onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            ส่งความคิดเห็น
                        </button>
                    </form>
                </div>

                {/* Display Comments */}
                <div className="mt-6">
                    {comments.map((comment) => (
                        <div key={comment.id} className="bg-gray-50 p-4 mb-4 rounded-lg shadow-sm">
                            <p className="font-semibold text-gray-800">{comment.user_name}</p>
                            <p className="text-gray-600">{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Threads;
