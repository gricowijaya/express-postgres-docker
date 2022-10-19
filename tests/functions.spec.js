const controller = require('../controller/index.js');
const mockRequest = (body={}) => ({ body })
const mockResponse =  () => {
    const res = {}
    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    return res;
}

// endpoint GET/
describe('controller.index.function', () => {
    // case if success
    test('res.json called with {status: true, message: "test build docker image sendiri!"}', done => {
        const req = mockRequest();
        const res = mockResponse();
        controller.index(req, res);
        expect(res.status).toBeCalledWith(200); // expected status
        expect(res.json).toBeCalledWith({
            status: true, 
            message: "test build docker image sendiri!"
        });
        done();
    });
});

