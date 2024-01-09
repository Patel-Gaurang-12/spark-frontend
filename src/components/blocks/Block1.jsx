import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { SlideLayout } from '../layout/SlideLayout';
import { Link } from 'react-router-dom';

export const Block1 = () => {
    return (
        <SlideLayout>
            <Typography color="primary" fontSize="lg" fontWeight="lg">
                The power to do more
            </Typography>
            <Typography
                level="h1"
                fontWeight="xl"
                fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
            >
                A large headlinerer about our product features & services
            </Typography>
            <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                A descriptive secondary text placeholder. Use it to explain your business
                offer better.
            </Typography>
            <Link to="/auth">
                <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />}>
                    Get Started
                </Button>
            </Link>
        </SlideLayout>
    );
}
